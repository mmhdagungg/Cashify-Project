const prisma = require("../../global/prisma");

const createDataKeuangan = async (id_profile, data) => {
    return prisma.dataKeuangan.create({
        data: {
            id_profile,
            labaKotor: data.labaKotor,
            bayarGaji: data.bayarGaji || 0,
            bayarAir: data.bayarAir || 0,
            biayaListrik: data.biayaListrik || 0,
            biayaTransport: data.biayaTransport || 0,
            biayaPromosi: data.biayaPromosi || 0,
            biayaPackaging: data.biayaPackaging || 0,
            biayaPajak: data.biayaPajak || 0,
        },
    });
};

const getHistory = async (id_profile, dateTime) => {
    // Convert the date string from MM-YYYY to YYYY-MM (month and year)
    const [month, year] = dateTime.split("-");

    // Set the start and end dates for the given year and month
    const startDate = new Date(year, month - 1, 1); // First day of the month
    const endDate = new Date(year, month, 0); // Last day of the month

    // Query the database using the date range (start and end of the month)
    const result = await prisma.dataKeuangan.findMany({
        where: {
            id_profile,
            dateAdded: {
                gte: startDate, // Greater than or equal to the start of the month
                lte: endDate   // Less than or equal to the end of the month
            }
        },
    });

    // Check if any data was found
    if (result.length === 0) {
        // If no data found, return a 404 response
        throw new Error("Tidak ada data");
    }

    return result;
};


const getHistoryDetails = async (id_profile, id_data) => {
    // Parse the parameters as integers
    const idProfile = parseInt(id_profile, 10);
    const idData = parseInt(id_data, 10)
    if (isNaN(idProfile) || isNaN(idData)) {
        throw new Error("Invalid parameter values");
    }
    return prisma.dataKeuangan.findUnique({
        where: {
            id: idData,
            id_profile: idProfile,
        },
    });
};


module.exports = { createDataKeuangan, getHistory, getHistoryDetails };
