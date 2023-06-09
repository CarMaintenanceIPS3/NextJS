import { useState } from 'react';
import styles from '@/styles/VehicleForm.module.css';


type VehicleData = {
    brand: string;
    model: string;
    year: number;
    kilometers: number;
};

const VehicleForm = () => {
    const [vehicleData, setVehicleData] = useState<VehicleData>({
        brand: '',
        model: '',
        year: 0,
        kilometers: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.name === 'year' || e.target.name === 'kilometers' ? parseInt(e.target.value) : e.target.value;
        setVehicleData({ ...vehicleData, [e.target.name]: value });
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
                console.log(result.message);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            alert(`Error: ${error}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form} data-testid="vehicle-form">
            <div>
                <label htmlFor="brand">Brand</label>
                <input 
                    id="brand"
                    name="brand"
                    type="text"
                    value={vehicleData.brand}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="model">Model</label>
                <input
                    id="model"
                    name="model"
                    type="text"
                    value={vehicleData.model}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="kilometers">Kilometers</label>
                <input
                    id="kilometers"
                    name="kilometers"
                    type="number"
                    value={vehicleData.kilometers}
                    onChange={handleChange}
                    min="1"
                    required
                />
            </div>
            <div>
                <label htmlFor="year">Year</label>
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
            </div>
            <button type="submit">Continue</button>
        </form>
    );

};

export default VehicleForm;
