// UK University coordinates and color palette
const COLORS = [
  "#ff4d4d", "#4d94ff", "#4dff88", "#ff4dff", "#ff944d", "#ffd633", "#00b4d8",
  "#f368e0", "#ff9f43", "#1dd1a1", "#c9a227", "#58a6ff", "#2ecc71", "#e74c3c",
  "#9b59b6", "#3498db", "#1abc9c", "#e67e22", "#34495e", "#16a085", "#27ae60",
  "#8e44ad", "#2980b9", "#f39c12", "#d35400", "#7f8c8d", "#2c3e50", "#e91e63",
  "#00bcd4", "#4caf50", "#ff9800", "#795548", "#607d8b", "#3f51b5", "#009688",
  "#cddc39", "#ff5722", "#673ab7", "#2196f3", "#ffeb3b", "#8bc34a"
];

export const universities = [
  { id: 1, name: "Aston University", location: [52.4862, -1.8904], color: COLORS[0],
    description: "395th in the QS World University Rankings 2026. Top 5% in the World.",
    tuitionFees: "UG: £16,300–£20,200 | PG: £20,250–£21,250",
    scholarships: [
      { id: 101, title: "Automatic Merit Scholarship", amount: "up to £2,000", type: "Merit" },
      { id: 102, title: "Sir Adrian Cadbury Chancellor's Scholarship", amount: "£10,000", type: "Excellence" },
      { id: 103, title: "Vice-Chancellor's Enterprise Scholarship", amount: "up to 100% full fee", type: "Enterprise" },
      { id: 104, title: "Regional Scholarships", amount: "not specified", type: "Regional" }
    ]},
  { id: 2, name: "Bangor University", location: [53.2275, -4.1293], color: COLORS[1],
    description: "55th in the UK (Complete University Guide 2026). 15th in UK, 1st in Wales (University Compare 2026).",
    tuitionFees: "UG: £18,000–£21,000 | PG: £18,000–£26,000",
    scholarships: [
      { id: 201, title: "International Scholarships for South East Asia & Taiwan", amount: "£5,000", type: "Regional" },
      { id: 202, title: "Alumni Scholarship", amount: "£1,000", type: "Alumni" },
      { id: 203, title: "International Scholarships", amount: "UG: Up to £4,000 Year 1. PG: Up to £3,000", type: "International" },
      { id: 204, title: "Deans Scholarships", amount: "UG: Up to £6,000. PG: Up to £5,000", type: "Excellence" }
    ]},
  { id: 3, name: "Birkbeck University of London", location: [51.5219, -0.1303], color: COLORS[2],
    description: "388th in the QS World University Rankings. Located at the heart of academic London.",
    tuitionFees: "£17,620–£23,220",
    scholarships: [
      { id: 301, title: "Birkbeck Global Future Scholarships", amount: "£1,000–£5,000", type: "International" },
      { id: 302, title: "Nigeria Creative Industries Master's Scholarships", amount: "Various", type: "Regional" },
      { id: 303, title: "Vice-Chancellor's Scholarships", amount: "Various", type: "Excellence" }
    ]},
  { id: 4, name: "Birmingham City University", location: [52.4862, -1.8904], color: COLORS[3],
    description: "Ranked 103rd in the 2026 Complete University Guide.",
    tuitionFees: "£15,120–£29,550",
    scholarships: [
      { id: 401, title: "Merit-based Scholarships", amount: "up to £2,000 (UG & PG)", type: "Merit" }
    ]},
  { id: 5, name: "Brunel University London", location: [51.5076, -0.4732], color: COLORS[4],
    description: "385th in QS World Rankings. 67th in UK (Complete University Guide).",
    tuitionFees: "£19,430–£27,000",
    scholarships: [
      { id: 501, title: "Vice-Chancellor's Postgraduate International Excellence Award", amount: "£6,000", type: "Postgraduate" },
      { id: 502, title: "Undergraduate International Bursary 2025/26", amount: "£3,000", type: "Undergraduate" },
      { id: 503, title: "Postgraduate Academic Excellence Scholarship", amount: "15%", type: "Excellence" },
      { id: 504, title: "Postgraduate International Bursary 2025/26", amount: "£4,000", type: "International" },
      { id: 505, title: "Vice Chancellor's Undergraduate Excellence Award", amount: "25% tuition fee waiver", type: "Excellence" }
    ]},
  { id: 6, name: "Canterbury Christ Church University", location: [51.2794, 1.0799], color: COLORS[5],
    description: "Top 20 in UK for graduates in employment. 99th in Complete University Guide 2026.",
    tuitionFees: "UG: £14,500–£15,800 | PG: £15,500–£15,800",
    scholarships: [
      { id: 601, title: "International Student Scholarship", amount: "£1,500", type: "International" },
      { id: 602, title: "Sports Scholarship", amount: "up to £1,500", type: "Sports" }
    ]},
  { id: 7, name: "Cardiff Metropolitan University", location: [51.4816, -3.1791], color: COLORS[6],
    description: "66th in Times & Sunday Times. Top 3 in Wales. 94.4% employability rate.",
    tuitionFees: "£16,000–£19,500",
    scholarships: [
      { id: 701, title: "Undergraduate Scholarship", amount: "£2,500", type: "Undergraduate" },
      { id: 702, title: "Vice Chancellor Scholarships", amount: "up to £3,500", type: "Excellence" },
      { id: 703, title: "MBA Scholarship", amount: "up to £4,000", type: "MBA" },
      { id: 704, title: "Full Fee Discount", amount: "up to £1,000", type: "General" }
    ]},
  { id: 8, name: "Cardiff University", location: [51.4894, -3.1808], color: COLORS[7],
    description: "22nd in UK (Complete University Guide). 181st globally (QS World Rankings).",
    tuitionFees: "UG: £18,700–£25,500 | PG: £19,450–£30,200",
    scholarships: [
      { id: 801, title: "Undergraduate International Excellence Scholarship", amount: "Half fee scholarship", type: "Excellence" },
      { id: 802, title: "Vice-Chancellor's International Scholarship PG", amount: "£3,500–£10,000", type: "Postgraduate" },
      { id: 803, title: "Chevening Scholarship", amount: "Fully paid one-year master's degree", type: "Government" }
    ]},
  { id: 9, name: "Coventry University", location: [52.4068, -1.5197], color: COLORS[8],
    description: "14th Modern University in UK. 59th in UK (Complete University Guide 2026).",
    tuitionFees: "UG: £16,800–£20,050 | PG: £15,780–£20,000+",
    scholarships: [
      { id: 901, title: "Vice-Chancellor Undergraduate Scholarships", amount: "£4,000", type: "Undergraduate" },
      { id: 902, title: "Vice-Chancellor Postgraduate Scholarships", amount: "£2,500", type: "Postgraduate" }
    ]},
  { id: 10, name: "De Montfort University", location: [52.6298, -1.1398], color: COLORS[9],
    description: "120th in UK (Complete University Guide 2026). 801–850 in QS World Rankings.",
    tuitionFees: "UG: £16,750–£17,250 | PG: £14,250–£18,000",
    scholarships: [
      { id: 1001, title: "Global Access Scholarship", amount: "£2,000 (UG), £3,000 (PG)", type: "International" }
    ]},
  { id: 11, name: "Durham University", location: [54.7761, -1.5753], color: COLORS[10],
    description: "3rd in Times Good University Guide 2026. 94th in QS World Rankings.",
    tuitionFees: "UG: £20,500–£25,500 | PG: £24,900–£28,000",
    scholarships: [
      { id: 1101, title: "Durham Inspiring Excellence 5K", amount: "£5,000", type: "Excellence" },
      { id: 1102, title: "Durham Inspiring Excellence 10K", amount: "£10,000", type: "Excellence" }
    ]},
  { id: 12, name: "Glasgow Caledonian University", location: [55.8642, -4.2518], color: COLORS[11],
    description: "Top modern university in UK. 85th in Complete University Guide 2026.",
    tuitionFees: "£12,000–£15,000 per year",
    scholarships: [
      { id: 1201, title: "New to GCU Undergraduate", amount: "£2,500", type: "Undergraduate" },
      { id: 1202, title: "New to GCU Regional Scholarship", amount: "£3,500", type: "Regional" },
      { id: 1203, title: "Postgraduate Ambassador Scholarship 2025-26", amount: "full fee waiver", type: "Postgraduate" }
    ]},
  { id: 13, name: "Heriot-Watt University", location: [55.9093, -3.3279], color: COLORS[12],
    description: "287th in world (QS 2026). 34th in UK.",
    tuitionFees: "UG: £18,700–£24,000 | PG: £13,500–£29,960",
    scholarships: [
      { id: 1301, title: "International Merit Scholarship", amount: "not specified", type: "Merit" },
      { id: 1302, title: "Heriot-Watt Sports Scholarships", amount: "not specified", type: "Sports" }
    ]},
  { id: 14, name: "Kingston University", location: [51.4100, -0.3014], color: COLORS[13],
    description: "55th in UK (Guardian 2026). 660 globally (QS 2026).",
    tuitionFees: "UG: £14,300–£24,000 | PG: £8,650–£17,300",
    scholarships: [
      { id: 1401, title: "International Scholarship", amount: "£5,000", type: "International" }
    ]},
  { id: 15, name: "Liverpool John Moores University", location: [53.4084, -2.9916], color: COLORS[14],
    description: "2nd in Uni Compare Top 100 (2025 & 2026). 95% graduate employability.",
    tuitionFees: "UG: £17,750/year | PG: £17,250–£22,000",
    scholarships: [
      { id: 1501, title: "Postgraduate scholarships", amount: "£3,500", type: "Postgraduate" },
      { id: 1502, title: "GREAT Scholarships 2026", amount: "£10,000", type: "International" }
    ]},
  { id: 16, name: "London Metropolitan University", location: [51.5219, -0.1303], color: COLORS[15],
    description: "96% graduate prosperity. 89th in UK (Guardian 2026).",
    tuitionFees: "£14,400–£17,500 per year",
    scholarships: [
      { id: 1601, title: "International Bright Futures Scholarship", amount: "£3,000", type: "International" }
    ]},
  { id: 17, name: "London South Bank University", location: [51.5028, -0.1138], color: COLORS[16],
    description: "110th in UK. Top 5 for Social Work, Forensic Science, Mechanical Engineering.",
    tuitionFees: "UG: £14,900–£15,860 | PG: £15,500–£17,000",
    scholarships: [
      { id: 1701, title: "Vice-Chancellor's International Merit Award", amount: "£2,000", type: "Merit" },
      { id: 1702, title: "Global Success Scholarship", amount: "£4,000", type: "International" }
    ]},
  { id: 18, name: "Manchester Metropolitan University", location: [53.4697, -2.2393], color: COLORS[17],
    description: "Modern University of the Year 2026. 38th in UK.",
    tuitionFees: "£20,000–£22,500",
    scholarships: [
      { id: 1801, title: "Undergraduate", amount: "£2,500 for each year", type: "Undergraduate" },
      { id: 1802, title: "Postgraduate", amount: "£3,500 first year", type: "Postgraduate" },
      { id: 1803, title: "Vice-Chancellor's International Regional Scholarships", amount: "50% of tuition fees", type: "Regional" }
    ]},
  { id: 19, name: "Middlesex University London", location: [51.5898, -0.2295], color: COLORS[18],
    description: "1st in London, 2nd in UK for University of the Year. 93% graduate employability.",
    tuitionFees: "UG: £14,700–£16,600 | PG: £15,000–£17,000",
    scholarships: [
      { id: 1901, title: "Regional awards", amount: "Up to £5,000", type: "Regional" },
      { id: 1902, title: "MESCyT Scholarship", amount: "Full tuition, accommodation, living allowance", type: "Government" }
    ]},
  { id: 20, name: "Newcastle University", location: [54.9783, -1.6178], color: COLORS[19],
    description: "Russell Group. 137th in world (QS 2026). 30th in UK.",
    tuitionFees: "UG: £20,400–£25,200 | PG: £25,000–£27,000",
    scholarships: [
      { id: 2001, title: "Vice-Chancellor's Global Scholarships", amount: "£4,000 (UG & PG)", type: "International" },
      { id: 2002, title: "Vice-Chancellor's International Scholarships", amount: "£6,000–£7,000", type: "International" },
      { id: 2003, title: "Vice-Chancellor's Excellence Scholarships", amount: "up to 50% or 100% tuition", type: "Excellence" }
    ]},
  { id: 21, name: "Nottingham Trent University", location: [52.9538, -1.1505], color: COLORS[20],
    description: "2nd in UK voted by students. 97% employability. Gold TEF.",
    tuitionFees: "£17,500–£18,250",
    scholarships: [
      { id: 2101, title: "NTU Excellence Scholarships", amount: "up to 50%", type: "Excellence" },
      { id: 2102, title: "International Scholarships and Discounts", amount: "up to £3,000", type: "International" }
    ]},
  { id: 22, name: "Queen's University Belfast", location: [54.5844, -5.9344], color: COLORS[21],
    description: "Russell Group. 180th in world (QS). 96% research world-leading.",
    tuitionFees: "£18,800–£34,450",
    scholarships: [
      { id: 2201, title: "International Student Fee Reduction", amount: "Up to £7,500", type: "International" }
    ]},
  { id: 23, name: "Robert Gordon University", location: [57.1497, -2.0943], color: COLORS[22],
    description: "2nd in Scotland for teaching quality. 97% graduate employability.",
    tuitionFees: "UG: £18,300 | PG: £15,130–£19,060",
    scholarships: [
      { id: 2301, title: "Vice-Chancellor's Undergraduate Scholarship", amount: "Full first year tuition", type: "Undergraduate" },
      { id: 2302, title: "RGU International Student Discount (Master's)", amount: "£2,000", type: "Postgraduate" },
      { id: 2303, title: "RGU International Merit Scholarship (Masters)", amount: "£5,000", type: "Merit" },
      { id: 2304, title: "RGU International Student Discount (UG)", amount: "£3,000", type: "Undergraduate" }
    ]},
  { id: 24, name: "Solent University", location: [50.9097, -1.4044], color: COLORS[23],
    description: "109th in UK. Top 25% for student satisfaction.",
    tuitionFees: "UG: £12,400–£14,250 | PG: £14,550–£16,100",
    scholarships: [
      { id: 2401, title: "Postgraduate Taught International Excellence Scholarship", amount: "£1,500", type: "Postgraduate" }
    ]},
  { id: 25, name: "Staffordshire University", location: [53.0074, -2.1755], color: COLORS[24],
    description: "93rd in UK (Complete University Guide 2026). Top 10 for Career Prospects.",
    tuitionFees: "UG & PG: £16,750–£19,000",
    scholarships: [
      { id: 2501, title: "The Lichfeldian Award", amount: "£1,000", type: "Merit" }
    ]},
  { id: 26, name: "Swansea University", location: [51.6214, -3.9436], color: COLORS[25],
    description: "29th in UK (Guardian 2025). 292nd in world (QS 2026).",
    tuitionFees: "UG: £15,000–£25,000+ | PG: £13,000–£19,000",
    scholarships: [
      { id: 2601, title: "International Excellence Scholarships UG", amount: "up to £7,000", type: "Undergraduate" },
      { id: 2602, title: "International Excellence Scholarships PG", amount: "up to £5,000", type: "Postgraduate" }
    ]},
  { id: 27, name: "Teesside University", location: [54.5727, -1.2354], color: COLORS[26],
    description: "Gold TEF. 90th in Complete University Guide 2026.",
    tuitionFees: "UG: £17,000 | PG: £10,000–£17,000",
    scholarships: [
      { id: 2701, title: "Vice Chancellor's Scholarship", amount: "£7,000", type: "Excellence" },
      { id: 2702, title: "Global Excellence Scholarship", amount: "£2,000", type: "International" }
    ]},
  { id: 28, name: "Ulster University", location: [54.5973, -5.9301], color: COLORS[27],
    description: "28th in UK. University of the Year (THE 2024).",
    tuitionFees: "UG: £15,840–£17,010 | PG: £17,730–£19,620",
    scholarships: [
      { id: 2801, title: "International Postgraduate Scholarship", amount: "£2,000", type: "Postgraduate" },
      { id: 2802, title: "University of the Year Dean's Scholarship", amount: "£4,200", type: "Excellence" }
    ]},
  { id: 29, name: "University College Birmingham", location: [52.4862, -1.8904], color: COLORS[28],
    description: "83.2% employability. £200 million infrastructure.",
    tuitionFees: "UG: £14,000–£18,500 | PG: £15,000–£28,000",
    scholarships: [
      { id: 2901, title: "Dean's Award", amount: "50% discount", type: "Merit" },
      { id: 2902, title: "Vice Chancellor's Award", amount: "full tuition discount", type: "Excellence" },
      { id: 2903, title: "Early Action Scholarship", amount: "UG: up to £5,500", type: "Early" }
    ]},
  { id: 30, name: "University of Aberdeen", location: [57.1644, -2.1020], color: COLORS[29],
    description: "15th in Times Good University Guide. 262nd in world (QS 2026).",
    tuitionFees: "UG: £28,750–£38,000 | PG: £15,300–£23,250",
    scholarships: [
      { id: 3001, title: "Aberdeen Global Scholarship UG", amount: "£6,000", type: "Undergraduate" },
      { id: 3002, title: "Aberdeen Global Scholarship PG", amount: "£8,000", type: "Postgraduate" }
    ]},
  { id: 31, name: "University of Bath", location: [51.3784, -2.3263], color: COLORS[30],
    description: "5th best in UK. Top 150 in world (QS 2024).",
    tuitionFees: "£19,000–£25,000",
    scholarships: [
      { id: 3101, title: "Chancellor's Scholarship", amount: "£2,000", type: "Merit" },
      { id: 3102, title: "International Baccalaureate 50th Anniversary", amount: "up to £8,000", type: "IB" },
      { id: 3103, title: "Deans Award for Academic Excellence", amount: "£5,000", type: "Excellence" }
    ]},
  { id: 32, name: "University of Bedfordshire", location: [51.8781, -0.4200], color: COLORS[31],
    description: "Top 20 for learning opportunities. 93% graduate employability.",
    tuitionFees: "UG: £11,300–£18,000 | PG: £21,000",
    scholarships: [
      { id: 3201, title: "High Achievers Undergraduate Scholarship", amount: "£3,000", type: "Undergraduate" },
      { id: 3202, title: "Postgraduate Global Merit Scholarship", amount: "£3,000", type: "Postgraduate" },
      { id: 3203, title: "Vice Chancellor's Scholarship (PG)", amount: "£1,000", type: "Postgraduate" }
    ]},
  { id: 33, name: "University of Bolton", location: [53.5732, -2.4385], color: COLORS[32],
    description: "Top 40 in UK. 1st in North West for Student Satisfaction.",
    tuitionFees: "£15,950 per year",
    scholarships: [
      { id: 3301, title: "International Academic Excellence Scholarships", amount: "UG: £6,000 over 3 years. PG: up to £3,000", type: "Excellence" }
    ]},
  { id: 34, name: "University of Bradford", location: [53.7960, -1.7594], color: COLORS[33],
    description: "47th in UK (QS 2026). 7th in UK (Guardian 2025).",
    tuitionFees: "UG: £20,538–£25,338 | PG: £10,000–£25,389",
    scholarships: [
      { id: 3401, title: "Global Scholar Award", amount: "£5,000", type: "International" },
      { id: 3402, title: "UK Academic Excellence Scholarships", amount: "£1,000 each year", type: "Excellence" },
      { id: 3403, title: "Bradford Futures Scholarship", amount: "£1,500 per year", type: "Merit" }
    ]},
  { id: 35, name: "University of Bristol", location: [51.4584, -2.6030], color: COLORS[34],
    description: "Russell Group. Top 10 in UK.",
    tuitionFees: "£25,000+",
    scholarships: [
      { id: 3501, title: "Think Big Scholarships", amount: "£5,000–£26,000", type: "UG/PG" }
    ]},
  { id: 36, name: "University of Buckingham", location: [52.0004, -0.9872], color: COLORS[35],
    description: "#1 for Student Satisfaction. 2-year undergraduate degrees.",
    tuitionFees: "£13,500–£22,200 per year",
    scholarships: [
      { id: 3601, title: "International Undergraduate High Achiever", amount: "£2,500", type: "Undergraduate" },
      { id: 3602, title: "Postgraduate First-Class Scholarship", amount: "33%", type: "Postgraduate" }
    ]},
  { id: 37, name: "University of Cambridge", location: [52.2043, 0.1147], color: COLORS[0],
    description: "World-leading research university. Top 5 globally.",
    tuitionFees: "£25,000+",
    scholarships: [
      { id: 3701, title: "Gates Cambridge Scholarship", amount: "Full Funding", type: "Leadership" },
      { id: 3702, title: "Cambridge Trust Scholarship", amount: "£5,000–£20,000", type: "Need-based" }
    ]},
  { id: 38, name: "University of Central Lancashire", location: [53.7632, -2.7031], color: COLORS[1],
    description: "Top 7% globally. 95.5% student prosperity.",
    tuitionFees: "£17,325–£49,000",
    scholarships: [
      { id: 3801, title: "International Scholarships", amount: "Various", type: "International" }
    ]},
  { id: 39, name: "University of Chester", location: [53.1973, -2.9002], color: COLORS[2],
    description: "1st in UK for International Study. 1st for Business School of the Year.",
    tuitionFees: "£14,450–£44,000",
    scholarships: [
      { id: 3901, title: "Snowdon Masters Scholarships", amount: "up to £15,000", type: "Postgraduate" }
    ]},
  { id: 40, name: "University of Dundee", location: [56.4577, -2.9791], color: COLORS[3],
    description: "36th in UK. 1st in UK for Dentistry.",
    tuitionFees: "£13,195–£20,195",
    scholarships: [
      { id: 4001, title: "Undergraduate scholarships", amount: "up to £5,000", type: "Undergraduate" },
      { id: 4002, title: "Global Citizenship Scholarship", amount: "£4,000", type: "International" },
      { id: 4003, title: "Global Excellence scholarship", amount: "£5,000 per year", type: "Excellence" }
    ]},
  { id: 41, name: "University of East Anglia", location: [52.6210, 1.2389], color: COLORS[4],
    description: "21st in UK. 381st globally (QS 2026). 91% research world-leading.",
    tuitionFees: "UG: £23,000–£47,500 | PG: £11,200–£47,700",
    scholarships: [
      { id: 4101, title: "International PG Merit Scholarship", amount: "up to £6,000", type: "Postgraduate" },
      { id: 4102, title: "UEA+Sport Individual Scholarship", amount: "up to £1,500", type: "Sports" }
    ]},
  { id: 42, name: "University of East London", location: [51.5074, 0.0556], color: COLORS[5],
    description: "University of the Year for Teaching Quality. 1st in London for student experience.",
    tuitionFees: "UG: £15,560/year | PG: £15,560–£18,960",
    scholarships: [
      { id: 4201, title: "Vice-Chancellor's Scholarship", amount: "Up to £28,605 over 3 years", type: "Excellence" },
      { id: 4202, title: "Dean Scholarship", amount: "Up to £13,500 over 3 years", type: "Merit" }
    ]},
  { id: 43, name: "University of Edinburgh", location: [55.9445, -3.1892], color: COLORS[6],
    description: "6th oldest in English-speaking world. Top 20 globally.",
    tuitionFees: "£25,000+",
    scholarships: [
      { id: 4301, title: "Edinburgh Global Online", amount: "Selective Full Tuition", type: "Global" },
      { id: 4302, title: "Coca-Cola Scholarship", amount: "£5,000", type: "Undergraduate" }
    ]},
  { id: 44, name: "University of Essex", location: [51.9459, 0.9390], color: COLORS[7],
    description: "Top 25 in UK. 17th for international outlook.",
    tuitionFees: "UG: £19,500–£28,850 | PG: £17,900–£25,000",
    scholarships: [
      { id: 4401, title: "Academic Excellence International Masters", amount: "up to £7,000", type: "Postgraduate" },
      { id: 4402, title: "Essex Global Talent Scholarship", amount: "50% first year tuition", type: "International" },
      { id: 4403, title: "Masters Excellence Scholarship", amount: "25% fee discount", type: "Postgraduate" }
    ]},
  { id: 45, name: "University of Gloucestershire", location: [51.8642, -2.2382], color: COLORS[8],
    description: "95% employability. 72nd in UK.",
    tuitionFees: "UG: £17,425 | PG: £17,950–£18,700",
    scholarships: [
      { id: 4501, title: "Global scholarship", amount: "£1,500", type: "International" },
      { id: 4502, title: "Undergraduate taught merit scholarship", amount: "£7,500", type: "Undergraduate" },
      { id: 4503, title: "Postgraduate taught merit scholarship", amount: "£5,000", type: "Postgraduate" }
    ]},
  { id: 46, name: "University of Glasgow", location: [55.8722, -4.2891], color: COLORS[9],
    description: "79th globally (QS 2026). 4th oldest in English-speaking world.",
    tuitionFees: "UG: £26,580–£58,890 | PG: £26,580–£49,500",
    scholarships: [
      { id: 4601, title: "World Changers Global Excellence Scholarship", amount: "£7,000 per year", type: "Excellence" },
      { id: 4602, title: "World Changers Glasgow Scholarship", amount: "£5,000", type: "International" }
    ]},
  { id: 47, name: "University of Greenwich", location: [51.4826, 0.0077], color: COLORS[10],
    description: "Four Queen's Anniversary Prizes. 95% graduate prosperity.",
    tuitionFees: "£17,500–£21,000",
    scholarships: [
      { id: 4701, title: "International Scholarship Award", amount: "£3,500", type: "International" }
    ]},
  { id: 48, name: "University of Hertfordshire", location: [51.7527, -0.2407], color: COLORS[11],
    description: "1st in East of England for satisfaction. King's Award for Enterprise 2024.",
    tuitionFees: "£15,965–£18,800",
    scholarships: [
      { id: 4801, title: "Chancellor's International Scholarship", amount: "up to £4,000", type: "International" },
      { id: 4802, title: "UG Tri Annual Scholarship", amount: "£1,500/year", type: "Undergraduate" }
    ]},
  { id: 49, name: "University of Hull", location: [53.7676, -0.3684], color: COLORS[12],
    description: "95% employability. Gold TEF. Most affordable UK city.",
    tuitionFees: "£9,000–£13,800 per year",
    scholarships: [
      { id: 4901, title: "Regional Studentships", amount: "£2,000 (Africa, Latin America, Asia, MENA)", type: "Regional" },
      { id: 4902, title: "Global Masters Fund 2025", amount: "£1,000", type: "Postgraduate" }
    ]},
  { id: 50, name: "University of Kent", location: [51.2974, 1.0694], color: COLORS[13],
    description: "#380 globally (QS 2025). 40th in UK.",
    tuitionFees: "UG & PG: £19,300–£23,500",
    scholarships: [
      { id: 5001, title: "Kent Future Students Global Scholarships PG", amount: "£2,000", type: "Postgraduate" },
      { id: 5002, title: "International Scholarships Taught Masters", amount: "£8,000", type: "Postgraduate" },
      { id: 5003, title: "International scholarships UG", amount: "Up to £18,000 (£6,000/year)", type: "Undergraduate" }
    ]},
  { id: 51, name: "University of Leicester", location: [52.6210, -1.1252], color: COLORS[14],
    description: "Daily Mail University of the Year 2025. 25th in UK.",
    tuitionFees: "£15,550 per year",
    scholarships: [
      { id: 5101, title: "International Merit Scholarship UG & PG", amount: "£5,000", type: "Merit" },
      { id: 5102, title: "Chancellor's International Scholarship", amount: "£3,000", type: "International" }
    ]},
  { id: 52, name: "University of Lincoln", location: [53.2344, -0.5384], color: COLORS[15],
    description: "Queen's Anniversary Prize. Gold TEF. Five-Star QS.",
    tuitionFees: "£16,600–£20,100",
    scholarships: [
      { id: 5201, title: "Global Leaders Scholarship", amount: "50% of tuition fees", type: "International" },
      { id: 5202, title: "International Undergraduate Scholarship", amount: "£2,000", type: "Undergraduate" },
      { id: 5203, title: "Vice-Chancellor's Scholarship", amount: "100% tuition fees", type: "Excellence" }
    ]},
  { id: 53, name: "University of Liverpool", location: [53.4065, -2.9665], color: COLORS[16],
    description: "#147 globally (QS 2026). 19th in UK. 92% graduate employment.",
    tuitionFees: "£10,900–£44,550",
    scholarships: [
      { id: 5301, title: "Undergraduate Global Advancement Scholarship", amount: "up to £5,000", type: "Undergraduate" },
      { id: 5302, title: "Postgraduate Global Advancement Scholarship", amount: "£5,000", type: "Postgraduate" }
    ]},
  { id: 54, name: "University of Manchester", location: [53.4667, -2.2333], color: COLORS[17],
    description: "Russell Group. Top 30 globally.",
    tuitionFees: "£25,000+",
    scholarships: [
      { id: 5401, title: "Equity and Merit Scholarships", amount: "Full Tuition + Travel", type: "International" },
      { id: 5402, title: "Manchester Science Scholarship", amount: "£3,000", type: "Merit" }
    ]},
  { id: 55, name: "Northumbria University", location: [54.9783, -1.6178], color: COLORS[18],
    description: "Modern University of the Year 2025. 43rd in UK. 95% employability.",
    tuitionFees: "UG: £19,350–£20,950 | PG: £19,350–£38,700",
    scholarships: [
      { id: 5501, title: "Northumbria International Scholarship UG", amount: "£3,000", type: "Undergraduate" },
      { id: 5502, title: "Postgraduate UK International Scholarships", amount: "£3,000", type: "Postgraduate" }
    ]},
  { id: 56, name: "University of Oxford", location: [51.7548, -1.2544], color: COLORS[19],
    description: "World-leading research university. Top 5 globally.",
    tuitionFees: "£25,000+",
    scholarships: [
      { id: 5601, title: "Clarendon Fund", amount: "Full Tuition + Living Grant", type: "Merit-based" },
      { id: 5602, title: "Rhodes Scholarship", amount: "Fully Funded", type: "Postgraduate" }
    ]},
  { id: 57, name: "University of Plymouth", location: [50.3755, -4.1428], color: COLORS[20],
    description: "75th in UK. Gold TEF. 90% student satisfaction.",
    tuitionFees: "£16,950–£18,950",
    scholarships: [
      { id: 5701, title: "Vice-Chancellor's International Excellence", amount: "50% fee reduction", type: "Excellence" },
      { id: 5702, title: "International Undergraduate Merit Scholarship", amount: "£3,500", type: "Undergraduate" },
      { id: 5703, title: "International Welcome to Plymouth", amount: "£1,500–£4,000", type: "International" }
    ]},
  { id: 58, name: "University of Portsmouth", location: [50.7958, -1.0933], color: COLORS[21],
    description: "33rd in UK. Top 150 in world. 94% graduate employment.",
    tuitionFees: "£16,200–£19,200",
    scholarships: [
      { id: 5801, title: "International Scholarships", amount: "Various", type: "International" }
    ]},
  { id: 59, name: "University of Reading", location: [51.4414, -0.9418], color: COLORS[22],
    description: "#1 in UK for Architecture. 96% graduate employment.",
    tuitionFees: "UG: £25,250–£29,950 | PG: £25,850–£30,950",
    scholarships: [
      { id: 5901, title: "Reading Excellence Scholarship UG", amount: "£4,000", type: "Undergraduate" },
      { id: 5902, title: "Global Sustainability Leaders Scholarship", amount: "£6,000", type: "International" },
      { id: 5903, title: "University of Reading Excellence Scholarships PG", amount: "£10,000", type: "Postgraduate" }
    ]},
  { id: 60, name: "University of Roehampton", location: [51.4552, -0.2458], color: COLORS[23],
    description: "Top 15% in world. Top 10 for postgraduate satisfaction.",
    tuitionFees: "£16,000–£18,000 per year",
    scholarships: [
      { id: 6001, title: "International Excellence Scholarship", amount: "up to £4,000", type: "International" }
    ]},
  { id: 61, name: "University of Salford", location: [53.4875, -2.2901], color: COLORS[24],
    description: "72nd in UK. Up to £5,000 in scholarships. 86% employability.",
    tuitionFees: "£13,750–£20,340",
    scholarships: [
      { id: 6101, title: "Global Gold Excellence Scholarship", amount: "UG: £3,500, PG: £3,000", type: "Excellence" },
      { id: 6102, title: "Global Silver Excellence Scholarship", amount: "UG: £3,000, PG: £2,500", type: "Merit" }
    ]},
  { id: 62, name: "University of St Andrews", location: [56.3401, -2.7956], color: COLORS[25],
    description: "Top 4 in UK. Leading university. 2nd for Student Satisfaction.",
    tuitionFees: "£31,670–£37,730",
    scholarships: [
      { id: 6201, title: "International Undergraduate Scholarship", amount: "Up to £10,000", type: "Undergraduate" },
      { id: 6202, title: "International Excellence Scholarship", amount: "Full tuition fees", type: "Excellence" }
    ]},
  { id: 63, name: "University of Stirling", location: [56.1450, -3.9190], color: COLORS[26],
    description: "63rd in UK. 96% graduate prosperity.",
    tuitionFees: "UG: £18,400 | PG: £19,000–£22,000",
    scholarships: [
      { id: 6301, title: "Be the Difference Postgraduate International", amount: "£7,000", type: "Postgraduate" },
      { id: 6302, title: "International Undergraduate Scholarship", amount: "£2,000/year (up to £8,000)", type: "Undergraduate" }
    ]},
  { id: 64, name: "University of Strathclyde", location: [55.8617, -4.2425], color: COLORS[27],
    description: "11th in UK. Scottish University of the Year. Triple Accreditation.",
    tuitionFees: "£16,900–£30,240",
    scholarships: [
      { id: 6401, title: "Strathclyde Business School Dean's Excellence", amount: "Up to £12,000", type: "Excellence" },
      { id: 6402, title: "Faculty of Science International Excellence", amount: "Up to £8,000", type: "Postgraduate" }
    ]},
  { id: 65, name: "University of Sunderland", location: [54.9069, -1.3838], color: COLORS[28],
    description: "Top 40 UK. University of the Year for Student Support.",
    tuitionFees: "£16,000–£18,000",
    scholarships: [
      { id: 6501, title: "Global Leaders Scholarship", amount: "UG: £5,000. PG: £4,500", type: "International" }
    ]},
  { id: 66, name: "University of Surrey", location: [51.2494, -0.5997], color: COLORS[29],
    description: "19th in UK. #1 for work placements. 95% graduate prosperity.",
    tuitionFees: "UG: £17,000–£26,000 | PG: £15,000–£25,000",
    scholarships: [
      { id: 6601, title: "International Excellence Award", amount: "£5,000 (UG & PG)", type: "Excellence" },
      { id: 6602, title: "Vice Chancellor's Future Leaders Award", amount: "£7,500", type: "Leadership" }
    ]},
  { id: 67, name: "University of Sussex", location: [50.8677, -0.0879], color: COLORS[30],
    description: "35% international students. 218th in QS World Rankings.",
    tuitionFees: "UG: £20,750–£21,900 | PG: £22,000–£24,000",
    scholarships: [
      { id: 6701, title: "Undergraduate scholarships", amount: "up to £5,000", type: "Undergraduate" },
      { id: 6702, title: "Chancellor's International Scholarships", amount: "up to £5,000", type: "International" }
    ]},
  { id: 68, name: "University of the West of England Bristol", location: [51.5007, -2.5479], color: COLORS[31],
    description: "Gold TEF. 90% graduate employment. Sustainability Institution of the Year.",
    tuitionFees: "£13,750–£18,000",
    scholarships: [
      { id: 6801, title: "Employability Scholarship", amount: "50% of tuition fees", type: "Employability" },
      { id: 6802, title: "International Student Scholarships", amount: "up to £4,000", type: "International" }
    ]},
  { id: 69, name: "University of Warwick", location: [52.3811, -1.5619], color: COLORS[32],
    description: "#74 globally (QS 2026). 9th in UK. 97.7% employment.",
    tuitionFees: "UG: £26,290–£33,520 | PG: £11,720–£57,500",
    scholarships: [
      { id: 6901, title: "Warwick Undergraduate Global Excellence Scholarship", amount: "up to full-fee awards", type: "Excellence" }
    ]},
  { id: 70, name: "University of Wolverhampton", location: [52.5870, -2.1298], color: COLORS[33],
    description: "#1 in UK for first-generation student support.",
    tuitionFees: "UG: £15,995–£17,000 | PG: £16,950–£18,054",
    scholarships: [
      { id: 7001, title: "Lord Paul Undergraduate Excellence", amount: "up to £2,000", type: "Undergraduate" },
      { id: 7002, title: "Lord Paul Postgraduate Excellence", amount: "up to £2,000", type: "Postgraduate" },
      { id: 7003, title: "Global Opportunities Regional Scholarship", amount: "£3,000 per year", type: "Regional" }
    ]},
  { id: 71, name: "University of York", location: [53.9450, -1.0522], color: COLORS[34],
    description: "Russell Group. 169th globally (QS 2026). Gold TEF.",
    tuitionFees: "UG: £11,960–£25,800 | PG: £11,960–£33,700",
    scholarships: [
      { id: 7101, title: "International Undergraduate Regional Scholarship", amount: "£5,000–£7,500", type: "Undergraduate" },
      { id: 7102, title: "Dean's Global Excellence Scholarship", amount: "Full fee 1st year, £10,000 2nd & 3rd", type: "Excellence" }
    ]},
  { id: 72, name: "Lancaster University", location: [54.0104, -2.7873], color: COLORS[35],
    description: "10th in UK. 5 Stars QS. Gold TEF.",
    tuitionFees: "UG: £24,700–£47,120 | PG: £24,830–£40,560",
    scholarships: [
      { id: 7201, title: "Lancaster Global Scholarship UG", amount: "£2,000 each year", type: "Undergraduate" },
      { id: 7202, title: "Lancaster Global Scholarship Master's", amount: "£5,000", type: "Postgraduate" }
    ]},
  { id: 73, name: "Keele University", location: [53.0034, -2.2701], color: COLORS[0],
    description: "Gold TEF. #1 Britain's Best University (students). Medicine Top 5 in England.",
    tuitionFees: "UG: £18,200–£24,900 | PG: £12,700–£21,900",
    scholarships: [
      { id: 7301, title: "Postgraduate Global Scholarship", amount: "£3,000–£5,000", type: "Postgraduate" },
      { id: 7302, title: "Undergraduate Global Scholarship", amount: "£5,000", type: "Undergraduate" }
    ]},
  { id: 74, name: "Loughborough University", location: [52.7657, -1.2412], color: COLORS[1],
    description: "7th in UK. #1 in World for Sports. Sports University of the Year.",
    tuitionFees: "UG: £23,000–£29,750 | PG: £23,370–£25,500",
    scholarships: [
      { id: 7401, title: "International Scholarships", amount: "25% off first-year tuition", type: "International" },
      { id: 7402, title: "Sports Scholarships", amount: "Up to £5,000 per year", type: "Sports" }
    ]},
  { id: 75, name: "University of Huddersfield", location: [53.6427, -1.7762], color: COLORS[2],
    description: "65th in UK. Top young university in UK.",
    tuitionFees: "UG: £16,500–£22,000 | PG: £17,600–£19,800",
    scholarships: [
      { id: 7501, title: "Merit-based scholarships", amount: "up to £4,000 (UG & PG)", type: "Merit" },
      { id: 7502, title: "Vice-Chancellor's Scholarship", amount: "up to 100% waiver (PG)", type: "Excellence" }
    ]},
  { id: 76, name: "Imperial College London", location: [51.4988, -0.1749], color: COLORS[3],
    description: "Top 10 globally. Focus on science and tech.",
    tuitionFees: "£30,000+",
    scholarships: [
      { id: 7601, title: "President's Undergraduate Scholarships", amount: "£1,000 per year", type: "Academic" },
      { id: 7602, title: "Imperial College Marshall Scholarship", amount: "Full Tuition + Stipend", type: "Postgraduate" }
    ]},
  { id: 77, name: "Anglia Ruskin University", location: [52.2053, 0.1218], color: COLORS[4],
    description: "University of the Year 2023 (THE). 92% student satisfaction. Gold TEF.",
    tuitionFees: "£15,900–£20,200",
    scholarships: [
      { id: 7701, title: "International Undergraduate Scholarship", amount: "up to £7,000", type: "Undergraduate" },
      { id: 7702, title: "International Postgraduate Scholarship", amount: "up to £4,000", type: "Postgraduate" }
    ]},
  { id: 78, name: "Bournemouth University", location: [50.7428, -1.8966], color: COLORS[5],
    description: "95th in THE Young University Rankings. 56th in UK.",
    tuitionFees: "UG: £18,700–£19,700 | PG: £17,000–£22,000",
    scholarships: [
      { id: 7801, title: "BU Academic Excellence Scholarship", amount: "£2,500", type: "Excellence" },
      { id: 7802, title: "BU Sports Scholarship", amount: "£5,000", type: "Sports" }
    ]},
  { id: 79, name: "Leeds Beckett University", location: [53.8008, -1.5491], color: COLORS[6],
    description: "Top 5 for International Students. 78th in UK. 90% employment.",
    tuitionFees: "UG: £16,350/year | PG: £17,900",
    scholarships: [
      { id: 7901, title: "Carnegie Sports Scholarship", amount: "UG: £6,000. PG: 50% discount", type: "Sports" },
      { id: 7902, title: "International Student Scholarship", amount: "PG: £5,000. UG: £1,000", type: "International" }
    ]},
  { id: 80, name: "University of Brighton", location: [50.8225, -0.1372], color: COLORS[7],
    description: "Top 4% worldwide. 68th in UK.",
    tuitionFees: "UG: £17,250–£46,700 | PG: £14,900–£22,050",
    scholarships: [
      { id: 8001, title: "Vice-Chancellor international undergraduate", amount: "£5,500 per year", type: "Undergraduate" },
      { id: 8002, title: "International Office scholarships", amount: "£2,500", type: "International" }
    ]},
  { id: 81, name: "University of Suffolk", location: [52.0594, 1.1556], color: COLORS[8],
    description: "University of the Year (WhatUni 2025). 92% employment.",
    tuitionFees: "UG: £15,090–£18,380 | PG: £15,210–£19,100",
    scholarships: [
      { id: 8101, title: "International Merit Scholarship", amount: "up to £3,000", type: "Merit" }
    ]},
  { id: 82, name: "University of Derby", location: [52.9225, -1.4746], color: COLORS[9],
    description: "2nd in UK for Employability. Top 10 UK University.",
    tuitionFees: "UG: £14,900–£21,500",
    scholarships: [
      { id: 8201, title: "Vice-Chancellor's Scholarships", amount: "£2,000", type: "Merit" },
      { id: 8202, title: "Full Payment Discount", amount: "£1,000", type: "Early" }
    ]},
  { id: 83, name: "Buckinghamshire New University", location: [51.6286, -0.7482], color: COLORS[10],
    description: "University of the Year for South East England. Top 5 for course quality.",
    tuitionFees: "£15,000–£17,500",
    scholarships: [
      { id: 8301, title: "Vice Chancellor's International Student Scholarship", amount: "£5,000", type: "International" }
    ]},
  { id: 84, name: "Wrexham University", location: [53.0526, -3.0042], color: COLORS[11],
    description: "3rd in UK for Student Satisfaction. 1st for Nursing.",
    tuitionFees: "£12,500–£15,500",
    scholarships: []
  },
  { id: 85, name: "Cranfield University", location: [52.0736, -0.6282], color: COLORS[12],
    description: "Top 10% globally for Sustainability. Top 35 for Engineering.",
    tuitionFees: "£22,175–£31,775",
    scholarships: [
      { id: 8501, title: "Course Excellence Scholarship", amount: "50% full fee", type: "Excellence" },
      { id: 8502, title: "Regional Excellence Scholarship", amount: "40% full fee", type: "Regional" }
    ]},
  { id: 86, name: "University of the West of Scotland", location: [55.8617, -4.2425], color: COLORS[13],
    description: "Top 100 UK. 91% employment.",
    tuitionFees: "Various",
    scholarships: [
      { id: 8601, title: "Enhanced International Scholarships", amount: "£10,950", type: "International" },
      { id: 8602, title: "UWS Global Scholarships", amount: "£2,000 per year", type: "International" }
    ]},
  { id: 87, name: "University of South Wales", location: [51.4816, -3.1791], color: COLORS[14],
    description: "6th in UK for new business startups. 96% employment.",
    tuitionFees: "UG: £13,500–£17,900 | PG: £14,500–£16,000",
    scholarships: [
      { id: 8701, title: "International Office Scholarships", amount: "UG: £1,500. PG: £2,000", type: "International" },
      { id: 8702, title: "Chancellors International Development", amount: "£2,500", type: "International" }
    ]},
  { id: 88, name: "Ravensbourne University London", location: [51.5074, 0.0235], color: COLORS[15],
    description: "4th best in London. 92% satisfaction.",
    tuitionFees: "UG: £17,500 | PG: £18,000–£24,000",
    scholarships: [
      { id: 8801, title: "Undergraduate scholarship", amount: "£3,500", type: "Undergraduate" },
      { id: 8802, title: "Postgraduate scholarship", amount: "£3,500", type: "Postgraduate" }
    ]},
  { id: 89, name: "Leeds Trinity University", location: [53.8008, -1.5491], color: COLORS[16],
    description: "96% employment. UK top 10 (NSS 2025). Guaranteed work placement.",
    tuitionFees: "UG: £12,000–£14,500 | PG: £15,000–£18,000",
    scholarships: [
      { id: 8901, title: "UG Nursing", amount: "£2,000 first year", type: "Undergraduate" },
      { id: 8902, title: "PG", amount: "£3,100–£3,350", type: "Postgraduate" }
    ]},
  { id: 90, name: "Regent College London", location: [51.5074, -0.1278], color: COLORS[17],
    description: "90% student satisfaction. 5 campuses. Flexible learning.",
    tuitionFees: "£17,500 per year",
    scholarships: []},
  { id: 91, name: "University for the Creative Arts", location: [51.2767, 0.5233], color: COLORS[18],
    description: "97% employability. 2nd highest specialist creative university in UK.",
    tuitionFees: "UG: £17,500 | PG: £11,700–£18,500",
    scholarships: []},
  { id: 92, name: "University of Westminster", location: [51.5234, -0.1389], color: COLORS[19],
    description: "Central London. Top 20 for international students.",
    tuitionFees: "Various",
    scholarships: [
      { id: 9201, title: "Home Postgraduate Part Fee Scholarship", amount: "£2,000", type: "Postgraduate" },
      { id: 9202, title: "Home Vice-Chancellor's Scholarship", amount: "£5,000", type: "Excellence" }
    ]},
  { id: 93, name: "University of Winchester", location: [51.0632, -1.3081], color: COLORS[20],
    description: "Top 100 UK. Top 25 for student community.",
    tuitionFees: "UG: £16,700 | PG: £17,450",
    scholarships: [
      { id: 9301, title: "International Student Scholarship PG", amount: "£5,000", type: "Postgraduate" },
      { id: 9302, title: "International Student Scholarship UG", amount: "£4,000", type: "Undergraduate" }
    ]},
  { id: 94, name: "University of Law", location: [51.5074, -0.1278], color: COLORS[21],
    description: "Top 10 for Teaching. Gold TEF. 94 of top 100 law firms.",
    tuitionFees: "UG: £16,700–£22,150 | PG: Various",
    scholarships: [
      { id: 9401, title: "Career Changer Scholarship", amount: "Full fee & partial", type: "Career" },
      { id: 9402, title: "Law First Scholarships", amount: "up to £5,000", type: "Merit" }
    ]},
  { id: 95, name: "Richmond, The American University in London", location: [51.5074, -0.1278], color: COLORS[22],
    description: "Dually-accredited UK & US. Integrated Internships.",
    tuitionFees: "Various",
    scholarships: [
      { id: 9501, title: "International Undergraduate Scholarships", amount: "£2,500 per year", type: "Undergraduate" },
      { id: 9502, title: "International Postgraduate Scholarships", amount: "Up to 15% reduction", type: "Postgraduate" }
    ]},
  { id: 96, name: "City, University of London", location: [51.5273, -0.1021], color: COLORS[23],
    description: "38th in UK. 86% research world-leading.",
    tuitionFees: "Various",
    scholarships: [
      { id: 9601, title: "Haberman Fund", amount: "£4,000", type: "Merit" },
      { id: 9602, title: "President's International Scholarship", amount: "50% scholarship", type: "International" }
    ]},
  { id: 97, name: "Hult International Business School", location: [51.5155, -0.0975], color: COLORS[24],
    description: "Triple Accreditation. 41 in Fortune's Best MBA 2026.",
    tuitionFees: "UG: £37,100 | PG: £46,000–£67,900",
    scholarships: [
      { id: 9701, title: "Academic Excellence Scholarship", amount: "up to 80,000 AED", type: "Excellence" },
      { id: 9702, title: "Global Generation Scholarship", amount: "up to 40,000 AED", type: "International" }
    ]},
  { id: 98, name: "University of Wales Trinity Saint David", location: [51.8814, -4.1289], color: COLORS[25],
    description: "26th in UK. 1st for Graduate Start-ups. 2nd for Student Satisfaction.",
    tuitionFees: "Various",
    scholarships: [
      { id: 9801, title: "Commonwealth Country Scholarship", amount: "up to £3,000", type: "Commonwealth" }
    ]},
  { id: 99, name: "Amity University London", location: [51.5074, -0.1278], color: COLORS[26],
    description: "Central London. 9th in UK (Webometrics 2025).",
    tuitionFees: "Various",
    scholarships: []}
];
