"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, X, Check, ChevronDown } from "lucide-react";

const COUNTRY_CODES = [
    // Default - India first
    { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
    // Popular countries
    { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
    { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
    { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
    // All countries A-Z
    { code: "+93", country: "AF", flag: "🇦🇫", name: "Afghanistan" },
    { code: "+355", country: "AL", flag: "🇦🇱", name: "Albania" },
    { code: "+213", country: "DZ", flag: "🇩🇿", name: "Algeria" },
    { code: "+1684", country: "AS", flag: "🇦🇸", name: "American Samoa" },
    { code: "+376", country: "AD", flag: "🇦🇩", name: "Andorra" },
    { code: "+244", country: "AO", flag: "🇦🇴", name: "Angola" },
    { code: "+1268", country: "AG", flag: "🇦🇬", name: "Antigua & Barbuda" },
    { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
    { code: "+374", country: "AM", flag: "🇦🇲", name: "Armenia" },
    { code: "+43", country: "AT", flag: "🇦🇹", name: "Austria" },
    { code: "+994", country: "AZ", flag: "🇦🇿", name: "Azerbaijan" },
    { code: "+1242", country: "BS", flag: "🇧🇸", name: "Bahamas" },
    { code: "+973", country: "BH", flag: "🇧🇭", name: "Bahrain" },
    { code: "+880", country: "BD", flag: "🇧🇩", name: "Bangladesh" },
    { code: "+1246", country: "BB", flag: "🇧🇧", name: "Barbados" },
    { code: "+375", country: "BY", flag: "🇧🇾", name: "Belarus" },
    { code: "+32", country: "BE", flag: "🇧🇪", name: "Belgium" },
    { code: "+501", country: "BZ", flag: "🇧🇿", name: "Belize" },
    { code: "+229", country: "BJ", flag: "🇧🇯", name: "Benin" },
    { code: "+1441", country: "BM", flag: "🇧🇲", name: "Bermuda" },
    { code: "+975", country: "BT", flag: "🇧🇹", name: "Bhutan" },
    { code: "+591", country: "BO", flag: "🇧🇴", name: "Bolivia" },
    { code: "+387", country: "BA", flag: "🇧🇦", name: "Bosnia & Herzegovina" },
    { code: "+267", country: "BW", flag: "🇧🇼", name: "Botswana" },
    { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
    { code: "+673", country: "BN", flag: "🇧🇳", name: "Brunei" },
    { code: "+359", country: "BG", flag: "🇧🇬", name: "Bulgaria" },
    { code: "+226", country: "BF", flag: "🇧🇫", name: "Burkina Faso" },
    { code: "+257", country: "BI", flag: "🇧🇮", name: "Burundi" },
    { code: "+855", country: "KH", flag: "🇰🇭", name: "Cambodia" },
    { code: "+237", country: "CM", flag: "🇨🇲", name: "Cameroon" },
    { code: "+238", country: "CV", flag: "🇨🇻", name: "Cape Verde" },
    { code: "+236", country: "CF", flag: "🇨🇫", name: "Central African Republic" },
    { code: "+235", country: "TD", flag: "🇹🇩", name: "Chad" },
    { code: "+56", country: "CL", flag: "🇨🇱", name: "Chile" },
    { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
    { code: "+57", country: "CO", flag: "🇨🇴", name: "Colombia" },
    { code: "+269", country: "KM", flag: "🇰🇲", name: "Comoros" },
    { code: "+242", country: "CG", flag: "🇨🇬", name: "Congo" },
    { code: "+243", country: "CD", flag: "🇨🇩", name: "Congo (DRC)" },
    { code: "+506", country: "CR", flag: "🇨🇷", name: "Costa Rica" },
    { code: "+225", country: "CI", flag: "🇨🇮", name: "Côte d'Ivoire" },
    { code: "+385", country: "HR", flag: "🇭🇷", name: "Croatia" },
    { code: "+53", country: "CU", flag: "🇨🇺", name: "Cuba" },
    { code: "+357", country: "CY", flag: "🇨🇾", name: "Cyprus" },
    { code: "+420", country: "CZ", flag: "🇨🇿", name: "Czech Republic" },
    { code: "+45", country: "DK", flag: "🇩🇰", name: "Denmark" },
    { code: "+253", country: "DJ", flag: "🇩🇯", name: "Djibouti" },
    { code: "+1767", country: "DM", flag: "🇩🇲", name: "Dominica" },
    { code: "+1809", country: "DO", flag: "🇩🇴", name: "Dominican Republic" },
    { code: "+593", country: "EC", flag: "🇪🇨", name: "Ecuador" },
    { code: "+20", country: "EG", flag: "🇪🇬", name: "Egypt" },
    { code: "+503", country: "SV", flag: "🇸🇻", name: "El Salvador" },
    { code: "+240", country: "GQ", flag: "🇬🇶", name: "Equatorial Guinea" },
    { code: "+291", country: "ER", flag: "🇪🇷", name: "Eritrea" },
    { code: "+372", country: "EE", flag: "🇪🇪", name: "Estonia" },
    { code: "+268", country: "SZ", flag: "🇸🇿", name: "Eswatini" },
    { code: "+251", country: "ET", flag: "🇪🇹", name: "Ethiopia" },
    { code: "+679", country: "FJ", flag: "🇫🇯", name: "Fiji" },
    { code: "+358", country: "FI", flag: "🇫🇮", name: "Finland" },
    { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
    { code: "+241", country: "GA", flag: "🇬🇦", name: "Gabon" },
    { code: "+220", country: "GM", flag: "🇬🇲", name: "Gambia" },
    { code: "+995", country: "GE", flag: "🇬🇪", name: "Georgia" },
    { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
    { code: "+233", country: "GH", flag: "🇬🇭", name: "Ghana" },
    { code: "+30", country: "GR", flag: "🇬🇷", name: "Greece" },
    { code: "+1473", country: "GD", flag: "🇬🇩", name: "Grenada" },
    { code: "+502", country: "GT", flag: "🇬🇹", name: "Guatemala" },
    { code: "+224", country: "GN", flag: "🇬🇳", name: "Guinea" },
    { code: "+245", country: "GW", flag: "🇬🇼", name: "Guinea-Bissau" },
    { code: "+592", country: "GY", flag: "🇬🇾", name: "Guyana" },
    { code: "+509", country: "HT", flag: "🇭🇹", name: "Haiti" },
    { code: "+504", country: "HN", flag: "🇭🇳", name: "Honduras" },
    { code: "+852", country: "HK", flag: "🇭🇰", name: "Hong Kong" },
    { code: "+36", country: "HU", flag: "🇭🇺", name: "Hungary" },
    { code: "+354", country: "IS", flag: "🇮🇸", name: "Iceland" },
    { code: "+62", country: "ID", flag: "🇮🇩", name: "Indonesia" },
    { code: "+98", country: "IR", flag: "🇮🇷", name: "Iran" },
    { code: "+964", country: "IQ", flag: "🇮🇶", name: "Iraq" },
    { code: "+353", country: "IE", flag: "🇮🇪", name: "Ireland" },
    { code: "+972", country: "IL", flag: "🇮🇱", name: "Israel" },
    { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
    { code: "+1876", country: "JM", flag: "🇯🇲", name: "Jamaica" },
    { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
    { code: "+962", country: "JO", flag: "🇯🇴", name: "Jordan" },
    { code: "+7", country: "KZ", flag: "🇰🇿", name: "Kazakhstan" },
    { code: "+254", country: "KE", flag: "🇰🇪", name: "Kenya" },
    { code: "+686", country: "KI", flag: "🇰🇮", name: "Kiribati" },
    { code: "+965", country: "KW", flag: "🇰🇼", name: "Kuwait" },
    { code: "+996", country: "KG", flag: "🇰🇬", name: "Kyrgyzstan" },
    { code: "+856", country: "LA", flag: "🇱🇦", name: "Laos" },
    { code: "+371", country: "LV", flag: "🇱🇻", name: "Latvia" },
    { code: "+961", country: "LB", flag: "🇱🇧", name: "Lebanon" },
    { code: "+266", country: "LS", flag: "🇱🇸", name: "Lesotho" },
    { code: "+231", country: "LR", flag: "🇱🇷", name: "Liberia" },
    { code: "+218", country: "LY", flag: "🇱🇾", name: "Libya" },
    { code: "+423", country: "LI", flag: "🇱🇮", name: "Liechtenstein" },
    { code: "+370", country: "LT", flag: "🇱🇹", name: "Lithuania" },
    { code: "+352", country: "LU", flag: "🇱🇺", name: "Luxembourg" },
    { code: "+853", country: "MO", flag: "🇲🇴", name: "Macau" },
    { code: "+261", country: "MG", flag: "🇲🇬", name: "Madagascar" },
    { code: "+265", country: "MW", flag: "🇲🇼", name: "Malawi" },
    { code: "+60", country: "MY", flag: "🇲🇾", name: "Malaysia" },
    { code: "+960", country: "MV", flag: "🇲🇻", name: "Maldives" },
    { code: "+223", country: "ML", flag: "🇲🇱", name: "Mali" },
    { code: "+356", country: "MT", flag: "🇲🇹", name: "Malta" },
    { code: "+692", country: "MH", flag: "🇲🇭", name: "Marshall Islands" },
    { code: "+222", country: "MR", flag: "🇲🇷", name: "Mauritania" },
    { code: "+230", country: "MU", flag: "🇲🇺", name: "Mauritius" },
    { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
    { code: "+691", country: "FM", flag: "🇫🇲", name: "Micronesia" },
    { code: "+373", country: "MD", flag: "🇲🇩", name: "Moldova" },
    { code: "+377", country: "MC", flag: "🇲🇨", name: "Monaco" },
    { code: "+976", country: "MN", flag: "🇲🇳", name: "Mongolia" },
    { code: "+382", country: "ME", flag: "🇲🇪", name: "Montenegro" },
    { code: "+212", country: "MA", flag: "🇲🇦", name: "Morocco" },
    { code: "+258", country: "MZ", flag: "🇲🇿", name: "Mozambique" },
    { code: "+95", country: "MM", flag: "🇲🇲", name: "Myanmar" },
    { code: "+264", country: "NA", flag: "🇳🇦", name: "Namibia" },
    { code: "+674", country: "NR", flag: "🇳🇷", name: "Nauru" },
    { code: "+977", country: "NP", flag: "🇳🇵", name: "Nepal" },
    { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands" },
    { code: "+64", country: "NZ", flag: "🇳🇿", name: "New Zealand" },
    { code: "+505", country: "NI", flag: "🇳🇮", name: "Nicaragua" },
    { code: "+227", country: "NE", flag: "🇳🇪", name: "Niger" },
    { code: "+234", country: "NG", flag: "🇳🇬", name: "Nigeria" },
    { code: "+850", country: "KP", flag: "🇰🇵", name: "North Korea" },
    { code: "+389", country: "MK", flag: "🇲🇰", name: "North Macedonia" },
    { code: "+47", country: "NO", flag: "🇳🇴", name: "Norway" },
    { code: "+968", country: "OM", flag: "🇴🇲", name: "Oman" },
    { code: "+92", country: "PK", flag: "🇵🇰", name: "Pakistan" },
    { code: "+680", country: "PW", flag: "🇵🇼", name: "Palau" },
    { code: "+970", country: "PS", flag: "🇵🇸", name: "Palestine" },
    { code: "+507", country: "PA", flag: "🇵🇦", name: "Panama" },
    { code: "+675", country: "PG", flag: "🇵🇬", name: "Papua New Guinea" },
    { code: "+595", country: "PY", flag: "🇵🇾", name: "Paraguay" },
    { code: "+51", country: "PE", flag: "🇵🇪", name: "Peru" },
    { code: "+63", country: "PH", flag: "🇵🇭", name: "Philippines" },
    { code: "+48", country: "PL", flag: "🇵🇱", name: "Poland" },
    { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugal" },
    { code: "+1787", country: "PR", flag: "🇵🇷", name: "Puerto Rico" },
    { code: "+974", country: "QA", flag: "🇶🇦", name: "Qatar" },
    { code: "+40", country: "RO", flag: "🇷🇴", name: "Romania" },
    { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
    { code: "+250", country: "RW", flag: "🇷🇼", name: "Rwanda" },
    { code: "+1869", country: "KN", flag: "🇰🇳", name: "Saint Kitts & Nevis" },
    { code: "+1758", country: "LC", flag: "🇱🇨", name: "Saint Lucia" },
    { code: "+1784", country: "VC", flag: "🇻🇨", name: "Saint Vincent" },
    { code: "+685", country: "WS", flag: "🇼🇸", name: "Samoa" },
    { code: "+378", country: "SM", flag: "🇸🇲", name: "San Marino" },
    { code: "+239", country: "ST", flag: "🇸🇹", name: "São Tomé & Príncipe" },
    { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
    { code: "+221", country: "SN", flag: "🇸🇳", name: "Senegal" },
    { code: "+381", country: "RS", flag: "🇷🇸", name: "Serbia" },
    { code: "+248", country: "SC", flag: "🇸🇨", name: "Seychelles" },
    { code: "+232", country: "SL", flag: "🇸🇱", name: "Sierra Leone" },
    { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
    { code: "+421", country: "SK", flag: "🇸🇰", name: "Slovakia" },
    { code: "+386", country: "SI", flag: "🇸🇮", name: "Slovenia" },
    { code: "+677", country: "SB", flag: "🇸🇧", name: "Solomon Islands" },
    { code: "+252", country: "SO", flag: "🇸🇴", name: "Somalia" },
    { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
    { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
    { code: "+211", country: "SS", flag: "🇸🇸", name: "South Sudan" },
    { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
    { code: "+94", country: "LK", flag: "🇱🇰", name: "Sri Lanka" },
    { code: "+249", country: "SD", flag: "🇸🇩", name: "Sudan" },
    { code: "+597", country: "SR", flag: "🇸🇷", name: "Suriname" },
    { code: "+46", country: "SE", flag: "🇸🇪", name: "Sweden" },
    { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland" },
    { code: "+963", country: "SY", flag: "🇸🇾", name: "Syria" },
    { code: "+886", country: "TW", flag: "🇹🇼", name: "Taiwan" },
    { code: "+992", country: "TJ", flag: "🇹🇯", name: "Tajikistan" },
    { code: "+255", country: "TZ", flag: "🇹🇿", name: "Tanzania" },
    { code: "+66", country: "TH", flag: "🇹🇭", name: "Thailand" },
    { code: "+670", country: "TL", flag: "🇹🇱", name: "Timor-Leste" },
    { code: "+228", country: "TG", flag: "🇹🇬", name: "Togo" },
    { code: "+676", country: "TO", flag: "🇹🇴", name: "Tonga" },
    { code: "+1868", country: "TT", flag: "🇹🇹", name: "Trinidad & Tobago" },
    { code: "+216", country: "TN", flag: "🇹🇳", name: "Tunisia" },
    { code: "+90", country: "TR", flag: "🇹🇷", name: "Turkey" },
    { code: "+993", country: "TM", flag: "🇹🇲", name: "Turkmenistan" },
    { code: "+688", country: "TV", flag: "🇹🇻", name: "Tuvalu" },
    { code: "+256", country: "UG", flag: "🇺🇬", name: "Uganda" },
    { code: "+380", country: "UA", flag: "🇺🇦", name: "Ukraine" },
    { code: "+971", country: "AE", flag: "🇦🇪", name: "UAE" },
    { code: "+598", country: "UY", flag: "🇺🇾", name: "Uruguay" },
    { code: "+998", country: "UZ", flag: "🇺🇿", name: "Uzbekistan" },
    { code: "+678", country: "VU", flag: "🇻🇺", name: "Vanuatu" },
    { code: "+379", country: "VA", flag: "🇻🇦", name: "Vatican City" },
    { code: "+58", country: "VE", flag: "🇻🇪", name: "Venezuela" },
    { code: "+84", country: "VN", flag: "🇻🇳", name: "Vietnam" },
    { code: "+967", country: "YE", flag: "🇾🇪", name: "Yemen" },
    { code: "+260", country: "ZM", flag: "🇿🇲", name: "Zambia" },
    { code: "+263", country: "ZW", flag: "🇿🇼", name: "Zimbabwe" },
];

export default function FinalCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]); // India default
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
    const countryDropdownRef = useRef<HTMLDivElement>(null);
    const [businessName, setBusinessName] = useState("");
    const [website, setWebsite] = useState("");
    const [problem, setProblem] = useState("");
    const [budget, setBudget] = useState("");

    // UI state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showRejection, setShowRejection] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    // Close country dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
                setIsCountryDropdownOpen(false);
                setCountrySearch("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredCountries = COUNTRY_CODES.filter(c =>
        c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        c.code.includes(countrySearch)
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send to our API route
            // We always save the lead data so we don't waste information, even if rejected.
            await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone: `${selectedCountry.code} ${phone}`, businessName, website, problem, budget })
            });

            if (budget === "Just exploring AI options" || !budget) {
                setShowRejection(true);
            } else {
                setShowSuccessMessage(true);
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error("Failed to submit", error);
            alert('An error occurred. Please try again.');
            setIsSubmitting(false);
        }
    };

    const inputStyle = {
        width: "100%",
        background: "rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "8px",
        padding: "0.8rem 1rem",
        color: "#fff",
        fontSize: "1rem",
        fontFamily: "var(--font-inter), sans-serif",
        marginBottom: "1rem",
        outline: "none",
    };

    return (
        <section id="contact" style={{ padding: "4rem 1.5rem 8rem 1.5rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                <div
                    style={{
                        background: "linear-gradient(135deg, rgba(7,26,20,0.8) 0%, rgba(15,61,46,0.9) 100%)",
                        border: "1px solid rgba(34,197,94,0.2)",
                        borderRadius: "32px",
                        padding: "5rem 2rem",
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
                    }}
                >
                    {/* Background Glows */}
                    <div
                        style={{
                            position: "absolute",
                            top: "-50%",
                            left: "-10%",
                            width: "600px",
                            height: "600px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 60%)",
                            pointerEvents: "none",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "-50%",
                            right: "-10%",
                            width: "500px",
                            height: "500px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 60%)",
                            pointerEvents: "none",
                        }}
                    />

                    <div style={{ position: "relative", zIndex: 1 }}>
                        <h2
                            style={{
                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                fontWeight: 800,
                                color: "#fff",
                                lineHeight: 1.1,
                                letterSpacing: "-0.03em",
                                marginBottom: "1.5rem",
                            }}
                        >
                            Limited Strategy Sessions <br />
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #22C55E, #10B981)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Available Each Week
                            </span>
                        </h2>

                        <p
                            style={{
                                fontSize: "1.05rem",
                                color: "rgba(255,255,255,0.6)",
                                maxWidth: "500px",
                                margin: "0 auto 2rem auto",
                                fontFamily: "var(--font-inter), sans-serif",
                                lineHeight: 1.6,
                            }}
                        >
                            Let&apos;s build intelligent systems that work while you sleep.
                        </p>

                        {/* Qualification Signal */}
                        <div style={{
                            maxWidth: "420px",
                            margin: "0 auto 2.5rem auto",
                            textAlign: "left",
                        }}>
                            <p style={{
                                fontSize: "0.9rem",
                                color: "rgba(255,255,255,0.8)",
                                fontWeight: 600,
                                fontFamily: "var(--font-inter), sans-serif",
                                marginBottom: "0.75rem",
                            }}>
                                This session is ideal if:
                            </p>
                            {[
                                "You operate a revenue-generating business",
                                "You want implementation within 30–60 days",
                                "You are prepared to invest in execution",
                            ].map((item) => (
                                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                    <Check size={16} color="#22C55E" strokeWidth={3} />
                                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-inter), sans-serif" }}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            style={{
                                background: "linear-gradient(135deg, #22C55E, #10B981)",
                                color: "#071A14",
                                border: "none",
                                borderRadius: "50px",
                                padding: "1rem 3rem",
                                fontSize: "1.2rem",
                                fontWeight: 700,
                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                transition: "opacity 0.2s, transform 0.2s",
                                margin: "0 auto 1.5rem auto"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.opacity = "0.9";
                                e.currentTarget.style.transform = "scale(1.02)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = "1";
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            Apply for AI Strategy Session <ArrowRight size={20} />
                        </button>

                        <p style={{
                            fontSize: "0.8rem",
                            color: "rgba(255,255,255,0.35)",
                            fontFamily: "var(--font-inter), sans-serif",
                            fontStyle: "italic",
                        }}>
                            Designed for businesses prepared to invest ₹50,000+ in AI implementation.
                        </p>

                    </div>
                </div>

            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    backdropFilter: "blur(5px)",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem"
                }}>
                    <div style={{
                        background: "#071A14",
                        border: "1px solid rgba(34,197,94,0.2)",
                        borderRadius: "24px",
                        width: "100%",
                        maxWidth: "500px",
                        padding: "2rem",
                        position: "relative",
                        maxHeight: "90vh",
                        overflowY: "auto",
                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
                    }}>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                position: "absolute",
                                top: "1.5rem",
                                right: "1.5rem",
                                background: "transparent",
                                border: "none",
                                color: "rgba(255,255,255,0.5)",
                                cursor: "pointer"
                            }}
                        >
                            <X size={24} />
                        </button>

                        {!showRejection ? (
                            <>
                                <h3 style={{
                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                    fontSize: "1.5rem",
                                    color: "#fff",
                                    marginBottom: "1.5rem"
                                }}>Apply for AI Strategy Session</h3>

                                <form onSubmit={handleSubmit}>
                                    {!showSuccessMessage ? (
                                        <>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                required
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                                style={inputStyle}
                                            />
                                            <input
                                                type="email"
                                                placeholder="Work Email"
                                                required
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                style={inputStyle}
                                            />
                                            {/* Phone with Country Code */}
                                            <div style={{ position: "relative", marginBottom: "1rem" }} ref={countryDropdownRef}>
                                                <div style={{ display: "flex", gap: 0 }}>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setIsCountryDropdownOpen(!isCountryDropdownOpen);
                                                            setCountrySearch("");
                                                        }}
                                                        style={{
                                                            background: "rgba(0,0,0,0.5)",
                                                            border: "1px solid rgba(255,255,255,0.1)",
                                                            borderRight: "none",
                                                            borderRadius: "8px 0 0 8px",
                                                            padding: "0.8rem 0.6rem",
                                                            color: "#fff",
                                                            fontSize: "0.95rem",
                                                            fontFamily: "var(--font-inter), sans-serif",
                                                            cursor: "pointer",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "0.3rem",
                                                            minWidth: "90px",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        <span style={{ fontSize: "1.2rem" }}>{selectedCountry.flag}</span>
                                                        <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>{selectedCountry.code}</span>
                                                        <ChevronDown size={14} style={{ opacity: 0.5 }} />
                                                    </button>
                                                    <input
                                                        type="tel"
                                                        placeholder="Phone Number"
                                                        required
                                                        value={phone}
                                                        onChange={e => {
                                                            const val = e.target.value.replace(/[^0-9]/g, "");
                                                            setPhone(val);
                                                        }}
                                                        style={{
                                                            ...inputStyle,
                                                            borderRadius: "0 8px 8px 0",
                                                            marginBottom: 0,
                                                            flex: 1,
                                                        }}
                                                    />
                                                </div>
                                                {/* Country Dropdown */}
                                                {isCountryDropdownOpen && (
                                                    <div style={{
                                                        position: "absolute",
                                                        top: "100%",
                                                        left: 0,
                                                        width: "100%",
                                                        maxHeight: "220px",
                                                        overflowY: "auto",
                                                        background: "#0a1f17",
                                                        border: "1px solid rgba(34,197,94,0.25)",
                                                        borderRadius: "8px",
                                                        marginTop: "4px",
                                                        zIndex: 100,
                                                        boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                                                    }}>
                                                        <input
                                                            type="text"
                                                            placeholder="Search country..."
                                                            value={countrySearch}
                                                            onChange={e => setCountrySearch(e.target.value)}
                                                            autoFocus
                                                            style={{
                                                                width: "100%",
                                                                background: "rgba(0,0,0,0.3)",
                                                                border: "none",
                                                                borderBottom: "1px solid rgba(255,255,255,0.08)",
                                                                padding: "0.6rem 0.8rem",
                                                                color: "#fff",
                                                                fontSize: "0.85rem",
                                                                fontFamily: "var(--font-inter), sans-serif",
                                                                outline: "none",
                                                            }}
                                                        />
                                                        {filteredCountries.map(c => (
                                                            <button
                                                                key={c.country}
                                                                type="button"
                                                                onClick={() => {
                                                                    setSelectedCountry(c);
                                                                    setIsCountryDropdownOpen(false);
                                                                    setCountrySearch("");
                                                                }}
                                                                style={{
                                                                    width: "100%",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.6rem",
                                                                    padding: "0.55rem 0.8rem",
                                                                    background: selectedCountry.country === c.country ? "rgba(34,197,94,0.1)" : "transparent",
                                                                    border: "none",
                                                                    color: "#fff",
                                                                    fontSize: "0.85rem",
                                                                    fontFamily: "var(--font-inter), sans-serif",
                                                                    cursor: "pointer",
                                                                    textAlign: "left",
                                                                    transition: "background 0.15s",
                                                                }}
                                                                onMouseEnter={e => e.currentTarget.style.background = "rgba(34,197,94,0.15)"}
                                                                onMouseLeave={e => e.currentTarget.style.background = selectedCountry.country === c.country ? "rgba(34,197,94,0.1)" : "transparent"}
                                                            >
                                                                <span style={{ fontSize: "1.15rem" }}>{c.flag}</span>
                                                                <span style={{ flex: 1, color: "rgba(255,255,255,0.85)" }}>{c.name}</span>
                                                                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>{c.code}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Business Name"
                                                required
                                                value={businessName}
                                                onChange={e => setBusinessName(e.target.value)}
                                                style={inputStyle}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Website / Instagram"
                                                required
                                                value={website}
                                                onChange={e => setWebsite(e.target.value)}
                                                style={inputStyle}
                                            />
                                            <textarea
                                                placeholder="What problem are you trying to solve?"
                                                required
                                                value={problem}
                                                onChange={e => setProblem(e.target.value)}
                                                style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
                                            />
                                            <select
                                                required
                                                value={budget}
                                                onChange={e => setBudget(e.target.value)}
                                                style={{ ...inputStyle, appearance: "none" }}
                                            >
                                                <option value="" disabled>Select Investment Range</option>
                                                <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                                                <option value="₹1,00,000 – ₹2,50,000">₹1,00,000 – ₹2,50,000</option>
                                                <option value="₹2,50,000+">₹2,50,000+</option>
                                                <option value="Just exploring AI options">Just exploring AI options</option>
                                            </select>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                style={{
                                                    width: "100%",
                                                    background: "linear-gradient(135deg, #22C55E, #10B981)",
                                                    color: "#071A14",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    padding: "1rem",
                                                    fontSize: "1.1rem",
                                                    fontWeight: 700,
                                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                                    cursor: isSubmitting ? "not-allowed" : "pointer",
                                                    opacity: isSubmitting ? 0.7 : 1,
                                                    marginTop: "1rem"
                                                }}
                                            >
                                                {isSubmitting ? "Processing..." : "Submit Application"}
                                            </button>
                                        </>
                                    ) : (
                                        <div style={{ textAlign: "center", padding: "2rem 0" }}>
                                            <div style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "50%",
                                                background: "rgba(34, 197, 94, 0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin: "0 auto 1.5rem auto",
                                                color: "#22C55E"
                                            }}>
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </div>
                                            <h3 style={{
                                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                                fontSize: "1.5rem",
                                                color: "#fff",
                                                marginBottom: "1rem"
                                            }}>Application in Review</h3>
                                            <p style={{
                                                color: "rgba(255,255,255,0.7)",
                                                lineHeight: 1.6,
                                                fontFamily: "var(--font-inter), sans-serif",
                                                fontSize: "1.1rem"
                                            }}>
                                                Each application is reviewed to ensure alignment with our implementation criteria.
                                                <br /><br />
                                                We&apos;ll be in touch within 24–48 hours if your business is a fit.
                                            </p>
                                        </div>
                                    )}
                                </form>
                            </>
                        ) : (
                            <div style={{ textAlign: "center", padding: "2rem 0" }}>
                                <h3 style={{
                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                    fontSize: "1.5rem",
                                    color: "#fff",
                                    marginBottom: "1rem"
                                }}>Application Received</h3>
                                <p style={{
                                    color: "rgba(255,255,255,0.7)",
                                    lineHeight: 1.6,
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontSize: "1.1rem"
                                }}>
                                    This strategy session is reserved for businesses ready to implement AI solutions.
                                    <br /><br />
                                    Once you're ready to move forward with implementation, feel free to apply again.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setShowRejection(false);
                                    }}
                                    style={{
                                        background: "transparent",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        color: "#fff",
                                        padding: "0.8rem 2rem",
                                        borderRadius: "50px",
                                        marginTop: "2rem",
                                        cursor: "pointer"
                                    }}
                                >
                                    Return to Site
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
