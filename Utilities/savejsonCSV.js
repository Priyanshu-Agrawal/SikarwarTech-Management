import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
const convertToCSV = (data) => {
    const csvHeader = Object.keys(data[0]).join(',') + '\n';
    const csvRows = data.map((item) => Object.values(item).join(',') + '\n');
    return csvHeader + csvRows.join('');
};

const saveJSON = async (data) => {
    try {
        const csvData = convertToCSV(data);
        const fileUri = FileSystem.documentDirectory + 'data.csv';
        await FileSystem.writeAsStringAsync(fileUri, csvData);
        console.log('CSV file saved:', fileUri);

        if (!(await Sharing.isAvailableAsync())) {
            alert(`Uh oh, sharing isn't available on your platform`);
            return;
        }
        
        await Sharing.shareAsync(fileUri);
    } catch (error) {
        console.error('Error exporting to CSV:', error);
    }
};



module.exports = saveJSON