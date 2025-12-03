import { Parser } from "json2csv";
import ExcelJS from "exceljs";
import PDFDocument from "pdfkit";
import Pet from "../models/Pet.js";

// Build query helper
const buildQuery = (query) => {
  const q = {};
  if (query.adopted !== undefined) q.adopted = query.adopted === "true";
  if (query.type) q.type = query.type;
  if (query.breed) q.breed = query.breed;
  if (query.name) q.name = { $regex: query.name, $options: "i" };
  return q;
};

// CSV Export
export const exportPetsCSV = async (req, res) => {
  try {
    const q = buildQuery(req.query);
    const pets = await Pet.find(q).lean();

    const fields = [
      "_id",
      "name",
      "age",
      "type",
      "breed",
      "description",
      "adopted",
      "createdAt",
      "updatedAt",
    ];

    const parser = new Parser({ fields });
    const csv = parser.parse(pets);

    res.header("Content-Type", "text/csv");
    res.attachment("pets_export.csv");

    return res.send(csv);
  } catch (err) {
    console.error("CSV export error:", err);
    res.status(500).json({ message: "CSV export failed" });
  }
};

// Excel Export
export const exportPetsExcel = async (req, res) => {
  try {
    const q = buildQuery(req.query);
    const pets = await Pet.find(q).lean();

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Pets");

    sheet.columns = [
      { header: "ID", key: "_id", width: 32 },
      { header: "Name", key: "name", width: 20 },
      { header: "Age", key: "age", width: 10 },
      { header: "Type", key: "type", width: 15 },
      { header: "Breed", key: "breed", width: 20 },
      { header: "Description", key: "description", width: 40 },
      { header: "Adopted", key: "adopted", width: 10 },
      { header: "Created At", key: "createdAt", width: 20 },
      { header: "Updated At", key: "updatedAt", width: 20 },
    ];

    pets.forEach((pet) => sheet.addRow(pet));

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=pets_export.xlsx");

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("Excel export error:", err);
    res.status(500).json({ message: "Excel export failed" });
  }
};

// PDF Export
export const exportPetsPDF = async (req, res) => {
  try {
    const q = buildQuery(req.query);
    const pets = await Pet.find(q).lean();

    const doc = new PDFDocument({ margin: 30, size: "A4" });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=pets_export.pdf");

    doc.pipe(res);

    doc.fontSize(18).text("Pet Adoption Data Export", { align: "center" });
    doc.moveDown();

    pets.forEach((pet, idx) => {
      doc.fontSize(12).text(`${idx + 1}. ${pet.name || "Unnamed"}`);
      doc.fontSize(10).text(`ID: ${pet._id}`);
      doc.text(`Type: ${pet.type || "-"}`);
      doc.text(`Breed: ${pet.breed || "-"}`);
      doc.text(`Age: ${pet.age || "-"}`);
      doc.text(`Adopted: ${pet.adopted ? "Yes" : "No"}`);
      doc.text(`Description: ${pet.description || "-"}`);
      doc.moveDown();
    });

    doc.end();
  } catch (err) {
    console.error("PDF export error:", err);
    res.status(500).json({ message: "PDF export failed" });
  }
};
