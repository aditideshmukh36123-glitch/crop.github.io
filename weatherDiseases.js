// weatherDiseases.js
const weatherDiseaseMap = [
    // Wheat
    {
    crops: ["Wheat"],
    tempRange: [0, 10],
    humidityRange: [80, 100],
    rainRequired: true,
    disease: "Snow Mold",
    solution: "Ensure proper drainage and remove old plant debris."
},
{
    crops: ["Wheat"],
    tempRange: [10, 15],
    humidityRange: [70, 85],
    rainRequired: true,
    disease: "Leaf Rust",
    solution: "Use resistant varieties and apply fungicides early."
},
{
    crops: ["Wheat"],
    tempRange: [10, 25],
    humidityRange: [80, 100],
    rainRequired: true,
    disease: "Fungal Rust",
    solution: "Apply fungicide, avoid overwatering, ensure good ventilation."
},
{
    crops: ["Wheat"],
    tempRange: [15, 25],
    humidityRange: [60, 79],
    rainRequired: false,
    disease: "Powdery Mildew",
    solution: "Use resistant varieties and apply sulfur-based fungicides."
},
{
    crops: ["Wheat"],
    tempRange: [20, 30],
    humidityRange: [50, 70],
    rainRequired: false,
    disease: "Septoria Leaf Blotch",
    solution: "Remove infected leaves and apply fungicides as needed."
},
{
    crops: ["Wheat"],
    tempRange: [25, 35],
    humidityRange: [40, 60],
    rainRequired: false,
    disease: "Tan Spot",
    solution: "Crop rotation, remove infected residues, and use fungicides."
},
{
    crops: ["Wheat"],
    tempRange: [5, 20],
    humidityRange: [90, 100],
    rainRequired: true,
    disease: "Fusarium Head Blight",
    solution: "Use resistant varieties, avoid dense planting, and apply fungicides at flowering."
},
{
    crops: ["Wheat"],
    tempRange: [10, 22],
    humidityRange: [65, 85],
    rainRequired: true,
    disease: "Powdery Mildew (Alternative Range)",
    solution: "Apply sulfur-based fungicides and ensure good airflow."
},{
    crops: ["Wheat"],
    tempRange: [0, 10],
    humidityRange: [85, 100],
    rainRequired: true,
    disease: "Snow Mold",
    solution: "Ensure proper drainage, remove old plant debris, avoid heavy snow accumulation."
},
{
    crops: ["Wheat"],
    tempRange: [5, 15],
    humidityRange: [70, 90],
    rainRequired: true,
    disease: "Leaf Rust",
    solution: "Plant resistant varieties, apply fungicide early, avoid dense planting."
},
{
    crops: ["Wheat"],
    tempRange: [10, 25],
    humidityRange: [80, 100],
    rainRequired: true,
    disease: "Fungal Rust",
    solution: "Use fungicide, avoid overwatering, maintain proper ventilation."
},
{
    crops: ["Wheat"],
    tempRange: [15, 25],
    humidityRange: [60, 80],
    rainRequired: false,
    disease: "Powdery Mildew",
    solution: "Apply sulfur-based fungicides, ensure airflow, use resistant varieties."
},
{
    crops: ["Wheat"],
    tempRange: [20, 30],
    humidityRange: [50, 70],
    rainRequired: false,
    disease: "Septoria Leaf Blotch",
    solution: "Remove infected leaves, apply fungicide if needed, rotate crops."
},
{
    crops: ["Wheat"],
    tempRange: [25, 35],
    humidityRange: [40, 60],
    rainRequired: false,
    disease: "Tan Spot",
    solution: "Use crop rotation, remove infected residues, apply fungicides when necessary."
},
{
    crops: ["Wheat"],
    tempRange: [5, 20],
    humidityRange: [90, 100],
    rainRequired: true,
    disease: "Fusarium Head Blight",
    solution: "Plant resistant varieties, avoid dense planting, apply fungicide at flowering stage."
},
{
    crops: ["Wheat"],
    tempRange: [10, 22],
    humidityRange: [65, 85],
    rainRequired: true,
    disease: "Powdery Mildew (Alt Range)",
    solution: "Apply sulfur fungicides, avoid high-density planting, improve airflow."
},
{
    crops: ["Wheat"],
    tempRange: [15, 25],
    humidityRange: [70, 90],
    rainRequired: true,
    disease: "Stem Rust",
    solution: "Plant resistant wheat varieties and monitor for infection regularly."
},
{
    crops: ["Wheat"],
    tempRange: [18, 28],
    humidityRange: [75, 95],
    rainRequired: true,
    disease: "Karnal Bunt",
    solution: "Use certified disease-free seeds, avoid high humidity during flowering, remove infected plants."
},
{
    crops: ["Wheat"],
    tempRange: [20, 30],
    humidityRange: [60, 85],
    rainRequired: true,
    disease: "Powdery Mildew (Late Season)",
    solution: "Spray sulfur-based fungicides, reduce crop density, ensure airflow."
},
{
    crops: ["Wheat"],
    tempRange: [5, 18],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Tilletia (Stinking Smut)",
    solution: "Use treated seeds and rotate crops annually."
},
{
    crops: ["Wheat"],
    tempRange: [12, 28],
    humidityRange: [70, 90],
    rainRequired: true,
    disease: "Barley Yellow Dwarf Virus",
    solution: "Use virus-free seeds, control aphids, remove infected plants."
},

    // Barley
   {
    crops: ["Barley"],
    tempRange: [10, 25],
    humidityRange: [80, 100],
    rainRequired: true,
    disease: "Powdery Mildew",
    solution: "Apply sulfur-based fungicides, ensure proper spacing for airflow, avoid excess nitrogen fertilizer."
},
{
    crops: ["Barley"],
    tempRange: [15, 22],
    humidityRange: [85, 100],
    rainRequired: true,
    disease: "Leaf Rust",
    solution: "Use resistant varieties, apply fungicides if infection appears, remove infected leaves."
},
{
    crops: ["Barley"],
    tempRange: [20, 28],
    humidityRange: [70, 90],
    rainRequired: true,
    disease: "Net Blotch",
    solution: "Rotate crops, use certified seeds, and apply appropriate fungicide."
},
{
    crops: ["Barley"],
    tempRange: [10, 18],
    humidityRange: [90, 100],
    rainRequired: true,
    disease: "Scald (Rhynchosporium secalis)",
    solution: "Plant resistant varieties, remove crop debris, apply fungicides during wet periods."
},
{
    crops: ["Barley"],
    tempRange: [5, 15],
    humidityRange: [85, 100],
    rainRequired: false,
    disease: "Spot Blotch",
    solution: "Use clean seeds, rotate crops, and apply fungicides if necessary."
},
{
    crops: ["Barley"],
    tempRange: [18, 28],
    humidityRange: [75, 95],
    rainRequired: true,
    disease: "Fusarium Head Blight",
    solution: "Ensure proper drainage, avoid excess nitrogen, and apply fungicides at flowering if needed."
},
{
    crops: ["Barley"],
    tempRange: [12, 22],
    humidityRange: [80, 95],
    rainRequired: false,
    disease: "Barley Yellow Dwarf Virus",
    solution: "Control aphid vectors, plant resistant varieties, and maintain crop hygiene."
},{
    crops: ["Barley"],
    tempRange: [8, 18],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Leaf Blotch (Bipolaris sorokiniana)",
    solution: "Use disease-free seeds, rotate crops, and apply fungicides when infection appears."
},
{
    crops: ["Barley"],
    tempRange: [10, 20],
    humidityRange: [85, 100],
    rainRequired: true,
    disease: "Barley Stripe Mosaic",
    solution: "Plant virus-free seeds, remove volunteer plants, and control vectors if possible."
},
{
    crops: ["Barley"],
    tempRange: [15, 25],
    humidityRange: [70, 90],
    rainRequired: true,
    disease: "Aphanomyces Root Rot",
    solution: "Ensure good soil drainage, avoid waterlogging, and practice crop rotation."
},
{
    crops: ["Barley"],
    tempRange: [10, 22],
    humidityRange: [75, 95],
    rainRequired: true,
    disease: "Stem Rust (Puccinia graminis)",
    solution: "Plant resistant varieties, remove infected debris, and apply fungicide if outbreak occurs."
},
{
    crops: ["Barley"],
    tempRange: [12, 24],
    humidityRange: [80, 100],
    rainRequired: false,
    disease: "Powdery Mildew (Low Moisture Variant)",
    solution: "Apply sulfur-based fungicides early, ensure proper air circulation, avoid high nitrogen fertilization."
},
{
    crops: ["Barley"],
    tempRange: [5, 15],
    humidityRange: [90, 100],
    rainRequired: false,
    disease: "Barley Scald (Mild Infection)",
    solution: "Remove crop residues, use clean seeds, and apply preventive fungicide sprays."
},
{
    crops: ["Barley"],
    tempRange: [18, 28],
    humidityRange: [75, 90],
    rainRequired: true,
    disease: "Barley Net Blotch (Severe Outbreak)",
    solution: "Rotate crops, avoid dense planting, and apply fungicides targeted for net blotch."
},
{
    crops: ["Barley"],
    tempRange: [10, 20],
    humidityRange: [85, 95],
    rainRequired: true,
    disease: "Barley Yellow Dwarf Virus (High Risk)",
    solution: "Control aphid populations, plant resistant varieties, maintain field hygiene."
},

    // Tomato
    {
    crops: ["Tomato"],
    tempRange: [20, 30],
    humidityRange: [70, 90],
    rainRequired: true,
    disease: "Late Blight (Phytophthora infestans)",
    solution: "Use certified disease-free seeds, apply fungicides, and remove infected leaves."
},
{
    crops: ["Tomato"],
    tempRange: [25, 35],
    humidityRange: [60, 80],
    rainRequired: false,
    disease: "Early Blight (Alternaria solani)",
    solution: "Remove infected leaves, rotate crops, and apply fungicides as needed."
},
{
    crops: ["Tomato"],
    tempRange: [20, 28],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Powdery Mildew",
    solution: "Ensure proper air circulation, apply sulfur-based fungicides, avoid dense planting."
},
{
    crops: ["Tomato"],
    tempRange: [18, 27],
    humidityRange: [70, 85],
    rainRequired: false,
    disease: "Septoria Leaf Spot",
    solution: "Remove infected leaves, practice crop rotation, and apply fungicides."
},
{
    crops: ["Tomato"],
    tempRange: [22, 32],
    humidityRange: [75, 95],
    rainRequired: true,
    disease: "Fusarium Wilt",
    solution: "Use resistant varieties, solarize soil, and avoid planting in infected soil."
},
{
    crops: ["Tomato"],
    tempRange: [24, 34],
    humidityRange: [65, 85],
    rainRequired: false,
    disease: "Verticillium Wilt",
    solution: "Plant resistant varieties and avoid planting tomatoes in the same soil for consecutive years."
},
{
    crops: ["Tomato"],
    tempRange: [20, 30],
    humidityRange: [70, 90],
    rainRequired: true,
    disease: "Bacterial Spot",
    solution: "Use disease-free seeds, avoid overhead irrigation, and remove infected plants."
},
{
    crops: ["Tomato"],
    tempRange: [18, 28],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Bacterial Canker",
    solution: "Sanitize tools, remove infected plants, and avoid contact with contaminated water."
},
{
    crops: ["Tomato"],
    tempRange: [25, 35],
    humidityRange: [60, 85],
    rainRequired: false,
    disease: "Tomato Mosaic Virus",
    solution: "Use virus-free seeds, disinfect tools, and control insect vectors."
},
{
    crops: ["Tomato"],
    tempRange: [20, 30],
    humidityRange: [70, 95],
    rainRequired: true,
    disease: "Anthracnose",
    solution: "Harvest fruit carefully, avoid fruit injuries, and apply fungicides if necessary."
},
   
   
{
    crops: ["Tomato"],
    tempRange: [18, 25],
    humidityRange: [85, 100],
    rainRequired: true,
    disease: "Cladosporium Leaf Mold",
    solution: "Ensure good ventilation, remove affected leaves, apply fungicides if needed."
},
{
    crops: ["Tomato"],
    tempRange: [22, 30],
    humidityRange: [75, 95],
    rainRequired: false,
    disease: "Tomato Spotted Wilt Virus",
    solution: "Control thrips (insect vector), remove infected plants, and use resistant varieties."
},
{
    crops: ["Tomato"],
    tempRange: [20, 32],
    humidityRange: [70, 90],
    rainRequired: true,
    disease: "Collar Rot (Sclerotium rolfsii)",
    solution: "Avoid waterlogging, remove infected plants, and apply appropriate fungicides."
},
{
    crops: ["Tomato"],
    tempRange: [25, 35],
    humidityRange: [65, 80],
    rainRequired: false,
    disease: "Root-Knot Nematode",
    solution: "Use nematode-resistant varieties, solarize soil, and practice crop rotation."
},
{
    crops: ["Tomato"],
    tempRange: [22, 30],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Bacterial Wilt",
    solution: "Use resistant varieties, remove infected plants, and disinfect tools and soil."
},
{
    crops: ["Tomato"],
    tempRange: [20, 28],
    humidityRange: [75, 90],
    rainRequired: false,
    disease: "Gray Mold (Botrytis cinerea)",
    solution: "Avoid dense planting, remove infected tissue, and apply fungicides."
},
{
    crops: ["Tomato"],
    tempRange: [24, 34],
    humidityRange: [70, 90],
    rainRequired: true,
    disease: "Tomato Leaf Curl Virus",
    solution: "Control whitefly vectors, remove infected plants, and use resistant varieties."
},
{
    crops: ["Tomato"],
    tempRange: [20, 30],
    humidityRange: [70, 95],
    rainRequired: false,
    disease: "Bacterial Speck",
    solution: "Use disease-free seeds, avoid overhead irrigation, and apply copper-based sprays if needed."
},
{
    crops: ["Tomato"],
    tempRange: [18, 28],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Stemphylium Gray Leaf Spot",
    solution: "Remove affected leaves, apply fungicides, and avoid excessive nitrogen fertilization."
},




 // Potato


 
{
    crops: ["Potato"],
    tempRange: [18, 25],
    humidityRange: [80, 100],
    rainRequired: true,
    disease: "Late Blight",
    solution: "Use certified disease-free seed, apply fungicides, and remove infected leaves."
},
{
    crops: ["Potato"],
    tempRange: [15, 22],
    humidityRange: [75, 95],
    rainRequired: false,
    disease: "Early Blight",
    solution: "Practice crop rotation, apply fungicides, and remove infected plant parts."
},
{
    crops: ["Potato"],
    tempRange: [20, 28],
    humidityRange: [70, 85],
    rainRequired: false,
    disease: "Black Scurf (Rhizoctonia solani)",
    solution: "Use healthy seed tubers, rotate crops, and treat seeds with fungicide before planting."
},
{
    crops: ["Potato"],
    tempRange: [18, 25],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Powdery Scab",
    solution: "Avoid planting in wet soils, use certified seed, and apply soil amendments if needed."
},
{
    crops: ["Potato"],
    tempRange: [22, 30],
    humidityRange: [75, 90],
    rainRequired: false,
    disease: "Common Scab",
    solution: "Maintain soil moisture during tuber formation, use disease-free seed, and avoid alkaline soils."
},
{
    crops: ["Potato"],
    tempRange: [18, 28],
    humidityRange: [85, 100],
    rainRequired: true,
    disease: "Fusarium Dry Rot",
    solution: "Store tubers in dry, well-ventilated areas; avoid mechanical injury to tubers."
},
{
    crops: ["Potato"],
    tempRange: [20, 28],
    humidityRange: [70, 90],
    rainRequired: true,
    disease: "Potato Virus Y",
    solution: "Use virus-free seed, control aphid vectors, and remove infected plants."
},
{
    crops: ["Potato"],
    tempRange: [15, 25],
    humidityRange: [75, 90],
    rainRequired: false,
    disease: "Verticillium Wilt",
    solution: "Use resistant varieties, rotate crops, and ensure proper soil drainage."
},
{
    crops: ["Potato"],
    tempRange: [18, 26],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Bacterial Wilt",
    solution: "Use disease-free seed, disinfect tools, and remove infected plants."
},
{
    crops: ["Potato"],
    tempRange: [20, 30],
    humidityRange: [70, 90],
    rainRequired: false,
    disease: "Leaf Roll Virus",
    solution: "Use certified seed, control aphid vectors, and remove infected plants."
},
{
    crops: ["Potato"],
    tempRange: [10, 18],
    humidityRange: [85, 100],
    rainRequired: true,
    disease: "Pink Rot",
    solution: "Ensure proper drainage, avoid waterlogging, and treat seed tubers with fungicide."
},
{
    crops: ["Potato"],
    tempRange: [12, 22],
    humidityRange: [75, 95],
    rainRequired: false,
    disease: "Blackleg",
    solution: "Use disease-free seed, remove infected plants, and maintain clean planting equipment."
},
{
    crops: ["Potato"],
    tempRange: [15, 20],
    humidityRange: [70, 90],
    rainRequired: false,
    disease: "Silver Scurf",
    solution: "Store tubers at cool temperatures, avoid mechanical damage, and use certified seed."
},
{
    crops: ["Potato"],
    tempRange: [18, 24],
    humidityRange: [80, 100],
    rainRequired: true,
    disease: "Common Blight (Bacterial)",
    solution: "Remove infected debris, avoid overhead irrigation, and rotate crops."
},
{
    crops: ["Potato"],
    tempRange: [20, 30],
    humidityRange: [75, 90],
    rainRequired: false,
    disease: "Stem Canker",
    solution: "Use resistant varieties, maintain soil health, and avoid excessive nitrogen."
},
{
    crops: ["Potato"],
    tempRange: [15, 25],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Rhizoctonia Black Scurf (Seedling Stage)",
    solution: "Treat seed tubers, plant in well-drained soil, and rotate crops."
},
{
    crops: ["Potato"],
    tempRange: [18, 26],
    humidityRange: [70, 85],
    rainRequired: false,
    disease: "Potato Leafroll Virus",
    solution: "Use certified virus-free seed, control aphid vectors, and remove infected plants."
},
{
    crops: ["Potato"],
    tempRange: [15, 22],
    humidityRange: [75, 95],
    rainRequired: true,
    disease: "Sclerotinia Stem Rot (White Mold)",
    solution: "Ensure proper spacing for air circulation, remove infected stems, and apply fungicide if necessary."
},
{
    crops: ["Potato"],
    tempRange: [20, 28],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Powdery Mildew (Potato)",
    solution: "Prune leaves for airflow, avoid excess nitrogen, and use fungicides."
},
{
    crops: ["Potato"],
    tempRange: [18, 25],
    humidityRange: [70, 85],
    rainRequired: false,
    disease: "Aster Yellows",
    solution: "Control leafhopper vectors, remove infected plants, and use resistant varieties if available."
},
    // Rice

    
{
    crops: ["Potato"],
    tempRange: [10, 18],
    humidityRange: [85, 100],
    rainRequired: true,
    disease: "Pink Rot",
    solution: "Ensure proper drainage, avoid waterlogging, and treat seed tubers with fungicide."
},
{
    crops: ["Potato"],
    tempRange: [12, 22],
    humidityRange: [75, 95],
    rainRequired: false,
    disease: "Blackleg",
    solution: "Use disease-free seed, remove infected plants, and maintain clean planting equipment."
},
{
    crops: ["Potato"],
    tempRange: [15, 20],
    humidityRange: [70, 90],
    rainRequired: false,
    disease: "Silver Scurf",
    solution: "Store tubers at cool temperatures, avoid mechanical damage, and use certified seed."
},
{
    crops: ["Potato"],
    tempRange: [18, 24],
    humidityRange: [80, 100],
    rainRequired: true,
    disease: "Common Blight (Bacterial)",
    solution: "Remove infected debris, avoid overhead irrigation, and rotate crops."
},
{
    crops: ["Potato"],
    tempRange: [20, 30],
    humidityRange: [75, 90],
    rainRequired: false,
    disease: "Stem Canker",
    solution: "Use resistant varieties, maintain soil health, and avoid excessive nitrogen."
},
{
    crops: ["Potato"],
    tempRange: [15, 25],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Rhizoctonia Black Scurf (Seedling Stage)",
    solution: "Treat seed tubers, plant in well-drained soil, and rotate crops."
},
{
    crops: ["Potato"],
    tempRange: [18, 26],
    humidityRange: [70, 85],
    rainRequired: false,
    disease: "Potato Leafroll Virus",
    solution: "Use certified virus-free seed, control aphid vectors, and remove infected plants."
},
{
    crops: ["Potato"],
    tempRange: [15, 22],
    humidityRange: [75, 95],
    rainRequired: true,
    disease: "Sclerotinia Stem Rot (White Mold)",
    solution: "Ensure proper spacing for air circulation, remove infected stems, and apply fungicide if necessary."
},
{
    crops: ["Potato"],
    tempRange: [20, 28],
    humidityRange: [80, 95],
    rainRequired: true,
    disease: "Powdery Mildew (Potato)",
    solution: "Prune leaves for airflow, avoid excess nitrogen, and use fungicides."
},
{
    crops: ["Potato"],
    tempRange: [18, 25],
    humidityRange: [70, 85],
    rainRequired: false,
    disease: "Aster Yellows",
    solution: "Control leafhopper vectors, remove infected plants, and use resistant varieties if available."
},

    // Grapes
    {
        crops: ["Grapes"],
        tempRange: [20, 30],
        humidityRange: [70, 95],
        rainRequired: true,
        disease: "Powdery Mildew",
        solution: "Prune leaves, improve airflow, apply sulfur-based fungicides."
    },
    {
        crops: ["Grapes"],
        tempRange: [25, 35],
        humidityRange: [60, 69],
        rainRequired: false,
        disease: "Downy Mildew",
        solution: "Spray copper-based fungicides and remove infected leaves."
    },

    // Apple
    {
        crops: ["Apple"],
        tempRange: [15, 25],
        humidityRange: [75, 95],
        rainRequired: true,
        disease: "Apple Scab",
        solution: "Remove fallen leaves, apply fungicides early."
    },

    // Maize / Corn
    {
        crops: ["Maize", "Corn"],
        tempRange: [18, 30],
        humidityRange: [70, 90],
        rainRequired: true,
        disease: "Common Rust",
        solution: "Plant resistant varieties and apply fungicide when necessary."
    },
    {
        crops: ["Maize", "Corn"],
        tempRange: [25, 35],
        humidityRange: [50, 69],
        rainRequired: false,
        disease: "Leaf Blight",
        solution: "Remove infected leaves and maintain proper spacing."
    },

    // Cucumber / Pumpkin
    {
        crops: ["Cucumber", "Pumpkin"],
        tempRange: [22, 30],
        humidityRange: [80, 100],
        rainRequired: true,
        disease: "Downy Mildew",
        solution: "Use drip irrigation, remove infected leaves, spray copper fungicides."
    },
    {
        crops: ["Cucumber", "Pumpkin"],
        tempRange: [18, 21],
        humidityRange: [60, 79],
        rainRequired: false,
        disease: "Powdery Mildew",
        solution: "Ensure good airflow, apply sulfur-based fungicides."
    },

    // Strawberry
    {
        crops: ["Strawberry"],
        tempRange: [18, 28],
        humidityRange: [75, 95],
        rainRequired: true,
        disease: "Gray Mold",
        solution: "Avoid dense planting, remove infected plants, apply fungicides."
    },
    {
        crops: ["Strawberry"],
        tempRange: [15, 20],
        humidityRange: [60, 74],
        rainRequired: false,
        disease: "Leaf Spot",
        solution: "Remove infected leaves and apply copper fungicides."
    }
];

// Updated predict function to handle selected crop
function predictDiseases(temp, humidity, description, selectedCrop) {
    let html = "";

    weatherDiseaseMap.forEach(item => {
        if (
            item.crops.includes(selectedCrop) &&
            temp >= item.tempRange[0] &&
            temp <= item.tempRange[1] &&
            humidity >= item.humidityRange[0] &&
            humidity <= item.humidityRange[1]
        ) {
            html += `
                <div class="disease-card">
                    <h4>${item.disease}</h4>
                    <p><strong>Affected Crops:</strong> ${item.crops.join(", ")}</p>
                    <p><strong>Solution / Precautions:</strong> ${item.solution}</p>
                </div>
            `;
        }
    });

    if (!html) {
        html = "<p>No major disease risk detected for the selected crop and current weather.</p>";
    }

    return html;
}
