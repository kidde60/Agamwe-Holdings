import {
  BarChart3,
  CloudSun,
  Database,
  Droplets,
  Leaf,
  Radar,
  Sprout,
  TreePine,
} from "lucide-react";
import img004 from "./assets/profile-images/img-004.png";
import img009 from "./assets/profile-images/img-009.png";
import img010 from "./assets/profile-images/img-010.png";
import img011 from "./assets/profile-images/img-011.png";
import img012 from "./assets/profile-images/img-012.png";
import img013 from "./assets/profile-images/img-013.png";
import img016 from "./assets/profile-images/img-016.png";
import memDWorkshop from "./assets/company-info/memD-training-workshop.png";
import maseseLandfill from "./assets/company-info/masese-landfill.png";
import mrvReport from "./assets/company-info/mrv-report.png";
import stakeholderValidation from "./assets/company-info/stakeholder-validation.png";

export const services = [
  { title: "Water Resources Management", short: "WRM", text: "Planning, developing and managing water resources and supply across water quantity, quality, institutions, infrastructure and information systems.", icon: Droplets },
  { title: "Climate Change Mitigation & Adaptation", short: "Climate", text: "Building resilience to climate impacts while supporting measures that reduce greenhouse gas emissions.", icon: CloudSun },
  { title: "Sustainable Environmental Management", short: "Environment", text: "Supporting sustainable use and protection of natural resources for present and future generations.", icon: Leaf },
  { title: "Remote Sensing & GIS", short: "GIS", text: "Geospatial and remote-sensing applications informed by training and field experience across public and private sectors.", icon: Radar },
  { title: "Sustainable Forest Management", short: "Forestry", text: "Tree seedlings, plantation establishment, silvicultural practices, environmental planning, protection and conservation.", icon: TreePine },
  { title: "Data, Research & Statistics", short: "Data", text: "Collecting, managing, analysing and presenting data so that numbers become useful information for decision-making.", icon: Database },
  { title: "Monitoring & Evaluation", short: "M&E", text: "Systematic assessment of programmes and projects to strengthen performance and value for money.", icon: BarChart3 },
  { title: "Strategic Business Planning", short: "Business", text: "Business management, strategic planning and capacity-building support for organisations and institutions.", icon: Sprout },
];

export const projects = [
  {
    slug: "nama-mrv-framework",
    year: "2022–2023",
    client: "Ministry of Energy and Mineral Development",
    title: "MRV Framework & Implementation Strategy for the NAMA Biogas Project",
    image: memDWorkshop,
    tags: ["MRV", "Waste", "Climate"],
    value: "US$30,000",
    location: "Kampala, Jinja, Masaka & Mbarara",
    description: "Consultancy to develop a Measuring, Reporting and Verification mechanism for greenhouse gas emissions and climate information in the waste sector for selected NAMA Biogas Project institutions.",
    deliverables: ["Inception report", "MRV framework and implementation strategy", "Data collection and reporting mechanisms", "Training of participating institutions", "Final MRV report and recommendations"],
  },
  {
    slug: "sirge-ghg-inventory",
    year: "2023–2024",
    client: "ACTED",
    title: "SIRGE Data Uptake into the National GHG Inventory",
    image: maseseLandfill,
    tags: ["Data", "Research", "GHG Inventory"],
    value: "US$27,600",
    location: "Uganda",
    description: "Collection and screening of technical data from the SIRGE database, synthesis of research reports and updating of the livestock-sector GHG inventory to support national reporting.",
    deliverables: ["SIRGE synthesis report", "Updated livestock GHG inventory", "Validation workshop", "GHG inventory report", "IEC and emissions factsheet materials"],
  },
  {
    slug: "uganda-bur2-review",
    year: "2025",
    client: "Ministry of Water and Environment",
    title: "Technical Assistance and Review of Uganda's Draft Second Biennial Update Report (BUR2)",
    image: stakeholderValidation,
    tags: ["Climate", "GHG", "MRV"],
    value: "US$23,000",
    location: "Kampala, Uganda",
    description: "A five-month assignment supporting technical review of Uganda's BUR2 and identifying capacity-building needs for climate reporting and international consultation and analysis.",
    deliverables: ["Technical review of BUR2 information", "Assessment against BUR guidelines", "Capacity-building needs identification", "Technical observations and recommendations"],
  },
];

export const teamMembers = [
  { name: "Agaba Joseph", title: "Managing Director · CPA(U) / Economist", initials: "AJ" },
  { name: "Mwebesa Caroline Kyosiima", title: "Director, Head of Programs · PRINCE2 Practitioner", initials: "MC" },
  { name: "Byarugaba Micheal", title: "Business Development Manager & IT Specialist", initials: "BM" },
  { name: "Kengingo Viola", title: "Building Economist · Registered Quantity Surveyor", initials: "KV" },
  { name: "Oriekot Joseph", title: "Quality Assurance & Statistician", initials: "OJ" },
  { name: "John Begumana Ayongyera", title: "Natural Resource Economist & MRV Expert", initials: "JB" },
  { name: "Wolliti Emmanuel", title: "Associate & Civil Engineer", initials: "WE" },
];

export const gallery = [
  { image: img009, label: "Water Resources Management" },
  { image: memDWorkshop, label: "MRV Training Workshop · MEMD" },
  { image: maseseLandfill, label: "KIIs with site workers · Masese landfill" },
  { image: img011, label: "Forest & Environmental Management" },
  { image: img012, label: "Remote Sensing & GIS" },
  { image: img013, label: "Monitoring & Evaluation" },
  { image: stakeholderValidation, label: "Stakeholder validation meeting" },
  { image: mrvReport, label: "MRV Framework & Implementation Strategy" },
  { image: img016, label: "Data & Research" },
];

export const stats = [
  { value: "2016", label: "Incorporated in Uganda" },
  { value: "8", label: "Core focus areas" },
  { value: "3+", label: "Selected assignments" },
  { value: "Africa", label: "Expansion ambition" },
];
