// დავალება #1
const array = ['Hi', 'Hello', 'Ola', 'Aloha', 'Privet', 'Gamarjoba'];
const firstFive = array.slice(0, 5);
console.log(firstFive); // პირველი 5 ელემენტი

// დავალება #2
const lastFive = array.slice(-5);
console.log(lastFive); // ბოლო 5 ელემენტი

// დავალება #3
const newArray3 = array.slice(2);
console.log(newArray3); // პირველი 2 ელემენტის გარდა ყველა ელემენტი

// დავალება #4
const newArray4 = array.slice(0, -2);
console.log(newArray4); // ბოლო 2 ელემენტის გარდა ყველა ელემენტი


// დავალება #5
const newArray5=array.slice(0,2);
console.log(newArray5);

// დავალება #6

const newArray6=array.slice(-2);
console.group(newArray6);

// დავალება #7

const newArray7=array.slice(3);
console.log(newArray7);


// დავალება #8
const newArray8=array.slice(0,-5); //აქ მგონი არ წერია რომელი ნ 
console.log(newArray8);

// დავალება #9


const universities=[
    {
        "university": "University of Oxford",
        "location": "Oxford, England",
        "established": 1096,
        "departments": [
            {"name": "Physics", "chair": "Dr. Emily Stark"},
            {"name": "Philosophy", "chair": "Dr. John Locke"}
        ],
        "notable_alumni": [
            {"name": "Stephen Hawking", "degree": "PhD, Physics"},
            {"name": "Oscar Wilde", "degree": "BA, English"}
        ]
    },
    {
        "university": "Harvard University",
        "location": "Cambridge, MA, USA",
        "established": 1636,
        "departments": [
            {"name": "Economics", "chair": "Dr. Lisa Genova"},
            {"name": "Biology", "chair": "Dr. Charles Darwin"}
        ],
        "notable_alumni": [
            {"name": "Barack Obama", "degree": "JD, Law"},
            {"name": "Mark Zuckerberg", "degree": "Dropped out"}
        ]
    },
    {
        "university": "Stanford University",
        "location": "Stanford, CA, USA",
        "established": 1885,
        "departments": [
            {"name": "Computer Science", "chair": "Dr. Ada Lovelace"},
            {"name": "Chemical Engineering", "chair": "Dr. Marie Curie"}
        ],
        "notable_alumni": [
            {"name": "Elon Musk", "degree": "BS, Physics"},
            {"name": "Reed Hastings", "degree": "MS, Computer Science"}
        ]
    },
    {
        "university": "University of Tokyo",
        "location": "Tokyo, Japan",
        "established": 1877,
        "departments": [
            {"name": "Law", "chair": "Dr. Kenji Fuji"},
            {"name": "Medicine", "chair": "Dr. Yoko Ono"}
        ],
        "notable_alumni": [
            {"name": "Shinzo Abe", "degree": "Political Science"},
            {"name": "Kazuo Ishiguro", "degree": "Bachelor in English"}
        ]
    },
    {
        "university": "University of Cape Town",
        "location": "Cape Town, South Africa",
        "established": 1829,
        "departments": [
            {"name": "Anthropology", "chair": "Dr. Nelson Mandela"},
            {"name": "Astronomy", "chair": "Dr. Sarah Fortune"}
        ],
        "notable_alumni": [
            {"name": "Desmond Tutu", "degree": "Master's in Theology"},
            {"name": "Elon Musk", "degree": "Attended, did not graduate"}
        ]
    }
]
const universityNames = [];

for (let i = 0; i < universities.length; i++) {
    universityNames.push(universities[i].university);
}

console.log(universityNames);


const departmentNames = [];

for (let i = 0; i < universities.length; i++) {
    const departments = universities[i].departments;
    for (let j = 0; j < departments.length; j++) {
        departmentNames.push(departments[j].name);
    }
}

console.log(departmentNames);