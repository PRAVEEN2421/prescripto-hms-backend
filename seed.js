import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
import doctorModel from "./models/doctorModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    });
}
const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
}


// DOCTORS TO SEED
const doctors = [
    {
        name: 'Dr. Richard James',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Richard has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc1.png',
            email: 'richard.james@example.com'
        }
    },
    {
        name: 'Dr. Emily Larson',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Emily has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc2.png',
            email: 'emily.larson@example.com'
        }
    },
    {
        name: 'Dr. Sarah Patel',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Sarah has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc3.png',
            email: 'sarah.patel@example.com'
        }
    },
    {
        name: 'Dr. Christopher Lee',
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Christopher has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc4.png',
            email: 'christopher.lee@example.com'
        }
    },
    {
        name: 'Dr. Jennifer Garcia',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jennifer has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc5.png',
            email: 'jennifer.garcia@example.com'
        }
    },
    {
        name: 'Dr. Andrew Williams',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Andrew has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc6.png',
            email: 'andrew.williams@example.com'
        }
    },
    {
        name: 'Dr. Christopher Davis',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Christopher has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc7.png',
            email: 'christopher.davis@example.com'
        }
    },
    {
        name: 'Dr. Timothy White',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Timothy has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc8.png',
            email: 'timothy.white@example.com'
        }
    },
    {
        name: 'Dr. Ava Mitchell',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Ava has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc9.png',
            email: 'ava.mitchell@example.com'
        }
    },
    {
        name: 'Dr. Jeffrey King',
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Jeffrey has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc10.png',
            email: 'jeffrey.king@example.com'
        }
    },
    {
        name: 'Dr. Zoe Kelly',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Zoe has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc11.png',
            email: 'zoe.kelly@example.com'
        }
    },
    {
        name: 'Dr. Patrick Harris',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Patrick has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc12.png',
            email: 'patrick.harris@example.com'
        }
    },
    {
        name: 'Dr. Chloe Evans',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Chloe has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc13.png',
            email: 'chloe.evans@example.com'
        }
    },
    {
        name: 'Dr. Ryan Martinez',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc14.png',
            email: 'ryan.martinez@example.com'
        }
    },
    {
        name: 'Dr. Amelia Hill',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Amelia has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        imageDetails: {
            path: 'd:/HMS1/frontend/src/assets/doc15.png',
            email: 'amelia.hill@example.com'
        }
    },
]


// MAIN SEED FUNCTION
const seedDB = async () => {
    try {
        await connectDB();
        await connectCloudinary();

        console.log("Connected to MongoDB and Cloudinary configured.");

        // Hash default password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('password123', salt);

        let i = 1;
        for (const doc of doctors) {
            console.log(`Processing ${i}/${doctors.length}: ${doc.name}`);

            // Check if doctor exists
            const existing = await doctorModel.findOne({ email: doc.imageDetails.email });
            if (existing) {
                console.log(`-> Skipping ${doc.name}, email ${doc.imageDetails.email} already exists.`);
                i++;
                continue;
            }

            // Upload image to Cloudinary
            console.log(`-> Uploading image for ${doc.name}...`);
            const imageUpload = await cloudinary.uploader.upload(doc.imageDetails.path, { resource_type: "image" });
            const imageUrl = imageUpload.secure_url;

            // Construct Doctor Data
            const doctorData = {
                name: doc.name,
                email: doc.imageDetails.email,
                image: imageUrl,
                password: hashedPassword,
                speciality: doc.speciality,
                degree: doc.degree,
                experience: doc.experience,
                about: doc.about,
                fees: doc.fees,
                address: doc.address,
                date: Date.now()
            };

            // Save to DB
            const newDoctor = new doctorModel(doctorData);
            await newDoctor.save();
            console.log(`-> Added ${doc.name} successfully!`);

            i++;
        }

        console.log("All mocked doctors processed.");

    } catch (error) {
        console.error("Error Seeding Database:");
        console.error(error);
    } finally {
        // Disconnect gracefully
        mongoose.connection.close();
        console.log("Disconnected from MongoDB. Existing script.");
        process.exit();
    }
}

// EXECUTE
seedDB();
