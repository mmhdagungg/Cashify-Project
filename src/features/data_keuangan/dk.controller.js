const { createDataKeuangan, getHistory, getHistoryDetails } = require("./dk.service");

const inputDataKeuangan = async (req, res) => {
    try {
        const data = await createDataKeuangan(req.user.id, req.body);
        res.status(201).json({
            message: "Data berhasil ditambahkan",
            dateAdded: data.dateAdded,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getHistoryData = async (req, res) => {
    try {
        const history = await getHistory(req.user.id, req.body.dateTime);
        res.status(200).json({ data: history });
    } catch (error) {
        if (error.message === "Tidak ada data") {
            res.status(404).json({ error: "Tidak ada data" });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
};

const getHistoryDetailsData = async (req, res) => {
    try {
        const details = await getHistoryDetails(req.params.id_profile, req.params.id_data);
        if (!details) {
            return res.status(404).json({ error: "Data tidak tersedia" });
        }
        res.status(200).json({ data: details });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { inputDataKeuangan, getHistoryData, getHistoryDetailsData };
