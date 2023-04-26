import { useState } from 'react';

type VehicleData = {
    brand: string;
    model: string;
    vin: string;
    year: number;
};

const VehicleForm = () => {
    const [vehicleData, setVehicleData] = useState<VehicleData>({
        brand: '',
        model: '',
        vin: '',
        year: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/saveVehicle', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(vehicleData),
            });
            const result = await response.json();
            if (result.success) {
                alert(result.message);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            alert(`Error: ${error}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand:</label>
            <input
                id="brand"
                name="brand"
                type="text"
                value={vehicleData.brand}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="model">Model:</label>
            <input
                id="model"
                name="model"
                type="text"
                value={vehicleData.model}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="vin">VIN:</label>
            <input
                id="vin"
                name="vin"
                type="text"
                value={vehicleData.vin}
                onChange={handleChange}
                required
            />
            <br />
            <label htmlFor="year">Year:</label>
            <input
                id="year"
                name="year"
                type="number"
                value={vehicleData.year}
                onChange={handleChange}
                min="1900"
                max="2099"
                required
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default VehicleForm;
