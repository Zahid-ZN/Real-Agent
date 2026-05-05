import React, { useState } from "react";

const ROLES = ["Alıcı", "Satıcı", "Agent"];
const BAKU_DISTRICTS = [
  "Abşeron",
  "Ağsu",
  "Ağcay",
  "Astara",
  "Balakən",
  "Barda",
  "Beyləqaya",
  "Biləcəri",
  "Cəbrayıl",
  "Dəvəçi",
  "Fərid",
  "Fəzil",
  "Göyçay",
  "Göytəpə",
  "Haçın",
  "Hınalı",
  "İsmayıllı",
  "Kəlbəcər",
  "Lahıc",
  "Lekit",
  "Masallı",
  "Mərdəkan",
  "Meşəli",
  "Minqəçevir",
  "Muğan",
  "Naftalan",
  "Nəsimi",
  "Nİzami",
  "Novxanı",
  "Oğuz",
  "Ordubad",
  "Pirallahı",
  "Qəbələ",
  "Qax",
  "Qızıl Alatəpə",
  "Qobustan",
  "Quba",
  "Qusar",
  "Rəsulzadə",
  "Sabail",
  "Sabunçu",
  "Sədərək",
  "Sərur",
  "Şabran",
  "Şəki",
  "Şemaxa",
  "Şəmkir",
  "Şərur",
  "Şuşa",
  "Sumqayıt",
  "Suraxanı",
  "Şirvan",
  "Tərtər",
  "Tovuz",
  "Ucar",
  "Xaçmaz",
  "Xanlar",
  "Xızı",
  "Xojali",
  "Xojāvənd",
  "Xonqur",
  "Xudat",
  "Yardımlı",
  "Yavaş",
  "Yazacık",
  "Yeni Yasamal",
  "Yunusbəyli",
  "Zaqatala",
  "Zərdab",
  "Zəngilan",
];

const matchListing = (listing, buyerRequests) =>
  buyerRequests.some(
    (request) =>
      request.district === listing.district &&
      listing.price <= request.budget
  );

export default function App() {
  const [activeRole, setActiveRole] = useState("Alıcı");
  const [listings, setListings] = useState([]);
  const [buyerRequests, setBuyerRequests] = useState(() => {
    const stored = localStorage.getItem("buyerRequests");
    return stored ? JSON.parse(stored) : [];
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // Seller states
  const [sellerTitle, setSellerTitle] = useState("");
  const [sellerDistrict, setSellerDistrict] = useState("");
  const [sellerPrice, setSellerPrice] = useState("");

  // Buyer states
  const [buyerName, setBuyerName] = useState("");
  const [buyerSurname, setBuyerSurname] = useState("");
  const [buyerDistrict, setBuyerDistrict] = useState("");
  const [buyerBudget, setBuyerBudget] = useState("");
  const [buyerPayment, setBuyerPayment] = useState("naqd");
  const [buyerDescription, setBuyerDescription] = useState("");
  const [buyerPhone1, setBuyerPhone1] = useState("");
  const [buyerWhatsapp, setBuyerWhatsapp] = useState(false);
  const [buyerPhone2, setBuyerPhone2] = useState("");

  const handleAddListing = (event) => {
    event.preventDefault();
    if (!sellerTitle.trim() || !sellerDistrict || !sellerPrice) return;

    setListings((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: sellerTitle.trim(),
        district: sellerDistrict,
        price: Number(sellerPrice),
      },
    ]);

    setSellerTitle("");
    setSellerDistrict("");
    setSellerPrice("");
  };

  const handleAddBuyerRequest = (event) => {
    event.preventDefault();
    if (
      !buyerName.trim() ||
      !buyerSurname.trim() ||
      !buyerDistrict ||
      !buyerBudget ||
      !buyerPhone1.trim() ||
      !buyerDescription.trim()
    )
      return;

    const newRequest = {
      id: Date.now(),
      name: buyerName.trim(),
      surname: buyerSurname.trim(),
      district: buyerDistrict,
      budget: Number(buyerBudget),
      payment: buyerPayment,
      description: buyerDescription.trim(),
      phone1: buyerPhone1.trim(),
      whatsapp: buyerWhatsapp,
      phone2: buyerPhone2.trim(),
    };

    const updated = [...buyerRequests, newRequest];
    setBuyerRequests(updated);
    localStorage.setItem("buyerRequests", JSON.stringify(updated));

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    setBuyerName("");
    setBuyerSurname("");
    setBuyerDistrict("");
    setBuyerBudget("");
    setBuyerPayment("naqd");
    setBuyerDescription("");
    setBuyerPhone1("");
    setBuyerWhatsapp(false);
    setBuyerPhone2("");
  };

  return (
    <div className="app-shell">
      <style>{`
        :root {
          color-scheme: dark;
          --bg: #0c1428;
          --panel: #151f3e;
          --panel-strong: #1d2c56;
          --text: #eef2ff;
          --muted: #9ab1d1;
          --border: #2e3b5d;
          --accent: #61dafb;
          --accent-strong: #47bfff;
          --success: #69e18d;
          --danger: #ff6d75;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          margin: 0;
          min-height: 100%;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          background: radial-gradient(circle at top, #182548 0%, #090d1b 65%);
          color: var(--text);
        }

        .app-shell {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 16px 32px;
        }

        .app-header {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
        }

        .eyebrow {
          margin: 0 0 8px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-size: 0.75rem;
        }

        .app-header h1 {
          margin: 0;
          font-size: clamp(1.4rem, 4vw, 3rem);
          line-height: 1.1;
          max-width: 100%;
        }

        .role-switcher {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          width: 100%;
        }

        .role-button {
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text);
          padding: 8px 14px;
          border-radius: 999px;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
          font-size: 0.9rem;
          flex: 1;
          min-width: 80px;
          text-align: center;
        }

        .role-button:hover,
        .role-button.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #08101e;
          transform: translateY(-1px);
        }

        .card {
          background: rgba(18, 28, 54, 0.95);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
          margin-bottom: 16px;
        }

        .card-header h2 {
          margin: 0;
          font-size: clamp(1.2rem, 3vw, 1.5rem);
        }

        .card-body {
          margin-top: 16px;
        }

        .form-grid {
          display: grid;
          gap: 14px;
          margin-bottom: 18px;
        }

        label {
          display: grid;
          gap: 8px;
          color: var(--muted);
          font-size: 0.9rem;
        }

        input {
          width: 100%;
          border-radius: 12px;
          border: 1px solid var(--border);
          padding: 12px 14px;
          background: #101a33;
          color: var(--text);
          outline: none;
          transition: border-color 0.2s ease;
          font-size: 16px;
        }

        input:focus {
          border-color: var(--accent);
        }

        .primary-button,
        .ghost-button {
          border-radius: 12px;
          padding: 12px 18px;
          cursor: pointer;
          transition: transform 0.18s ease, background 0.2s ease;
          font: inherit;
          font-size: 0.95rem;
          min-height: 48px;
        }

        .primary-button {
          border: none;
          background: var(--accent);
          color: #08101e;
          width: 100%;
        }

        .ghost-button {
          border: 1px solid var(--accent);
          background: transparent;
          color: var(--accent);
          width: 100%;
        }

        .primary-button:hover,
        .ghost-button:hover {
          transform: translateY(-1px);
        }

        .summary-title {
          margin: 0 0 10px;
          color: var(--text);
          font-size: 1rem;
        }

        .summary-list {
          margin: 0;
          padding-left: 16px;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .summary-list li {
          margin-bottom: 8px;
          word-break: break-word;
        }

        .empty-state {
          margin: 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .table-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          color: var(--text);
          font-size: 0.9rem;
        }

        th,
        td {
          padding: 12px 10px;
          text-align: left;
          border-bottom: 1px solid var(--border);
        }

        thead th {
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.75rem;
        }

        tbody tr:hover {
          background: rgba(255, 255, 255, 0.03);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          padding: 5px 10px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .match {
          background: rgba(94, 226, 145, 0.16);
          color: var(--success);
        }

        .no-match {
          background: rgba(255, 109, 109, 0.16);
          color: var(--danger);
        }

        .empty-table {
          padding: 30px 0;
          text-align: center;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .dashboard-copy {
          margin-bottom: 16px;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .dashboard-footer {
          margin-top: 16px;
          color: var(--muted);
          font-size: 0.9rem;
        }

        @media (max-width: 640px) {
          .app-shell {
            padding: 16px 12px 24px;
          }

          .app-header {
            flex-direction: column;
            gap: 12px;
          }

          .app-header h1 {
            font-size: clamp(1.2rem, 5vw, 2rem);
            line-height: 1.15;
          }

          .role-switcher {
            gap: 6px;
          }

          .role-button {
            padding: 7px 12px;
            font-size: 0.85rem;
            min-width: 70px;
          }

          .card {
            border-radius: 14px;
            padding: 16px;
            margin-bottom: 12px;
          }

          .card-header h2 {
            font-size: 1.1rem;
          }

          .form-grid {
            gap: 12px;
            margin-bottom: 14px;
          }

          label {
            gap: 6px;
            font-size: 0.85rem;
          }

          input {
            padding: 11px 12px;
            border-radius: 10px;
            font-size: 16px;
          }

          .primary-button,
          .ghost-button {
            padding: 11px 16px;
            border-radius: 10px;
            font-size: 0.9rem;
            min-height: 44px;
          }

          .summary-list {
            padding-left: 14px;
            font-size: 0.85rem;
          }

          .summary-list li {
            margin-bottom: 6px;
          }

          table {
            font-size: 0.8rem;
          }

          th,
          td {
            padding: 10px 8px;
          }

          thead th {
            font-size: 0.7rem;
          }

          .badge {
            padding: 4px 8px;
            font-size: 0.7rem;
          }

          .dashboard-footer {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .app-shell {
            padding: 12px 10px 20px;
          }

          .app-header h1 {
            font-size: clamp(1rem, 5vw, 1.8rem);
          }

          .eyebrow {
            font-size: 0.7rem;
            margin: 0 0 6px;
          }

          .role-button {
            padding: 6px 10px;
            font-size: 0.8rem;
            min-width: 60px;
          }

          .card {
            border-radius: 12px;
            padding: 14px;
            margin-bottom: 10px;
          }

          .card-header h2 {
            font-size: 1rem;
          }

          .form-grid {
            gap: 10px;
          }

          label {
            font-size: 0.8rem;
          }

          input {
            padding: 10px 11px;
            font-size: 16px;
            border-radius: 10px;
          }

          .primary-button,
          .ghost-button {
            padding: 10px 14px;
            font-size: 0.85rem;
            min-height: 44px;
          }

          .summary-title {
            font-size: 0.95rem;
            margin: 0 0 8px;
          }

          .summary-list {
            font-size: 0.8rem;
            padding-left: 12px;
          }

          .summary-list li {
            margin-bottom: 5px;
          }

          table {
            font-size: 0.75rem;
          }

          th,
          td {
            padding: 8px 6px;
          }

          thead th {
            font-size: 0.65rem;
          }

          .badge {
            padding: 3px 6px;
            font-size: 0.65rem;
          }

          .ghost-button {
            padding: 8px 12px;
            font-size: 0.8rem;
            min-height: 40px;
          }

          .dashboard-copy {
            font-size: 0.8rem;
          }

          .dashboard-footer {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <header className="app-header">
        <div>
          <p className="eyebrow">Real Agent</p>
          <h1>Alıcılar, satıcılar və agentlər üçün Real Estate platforması</h1>
        </div>
        <div className="role-switcher">
          {ROLES.map((role) => (
            <button
              key={role}
              className={`role-button ${activeRole === role ? "active" : ""}`}
              onClick={() => setActiveRole(role)}
            >
              {role === "Buyer"
                ? "Alıcı"
                : role === "Seller"
                ? "Satıcı"
                : "Agent"}
            </button>
          ))}
        </div>
      </header>

      {activeRole === "Seller" && (
        <section className="card">
          <div className="card-header">
            <h2>Satıcı Baxışı</h2>
          </div>
          <div className="card-body">
            <form className="form-grid" onSubmit={handleAddListing}>
              <label>
                Mülk başlığı
                <input
                  value={sellerTitle}
                  onChange={(event) => setSellerTitle(event.target.value)}
                  placeholder="Müasır loft"
                />
              </label>

              <label>
                Lokasiya
                <input
                  value={sellerLocation}
                  onChange={(event) => setSellerLocation(event.target.value)}
                  placeholder="Şəhər / qonşuluq"
                />
              </label>

              <label>
                Qiymət
                <input
                  type="number"
                  value={sellerPrice}
                  onChange={(event) => setSellerPrice(event.target.value)}
                  placeholder="İstənilən qiymət"
                />
              </label>

              <button type="submit" className="primary-button">
                Mülkü saxla
              </button>
            </form>

            <div>
              <h3 className="summary-title">Saxlanmış siyahılar</h3>
              {listings.length === 0 ? (
                <p className="empty-state">Henüz heç bir mülk əlavə edilməyib.</p>
              ) : (
                <ul className="summary-list">
                  {listings.map((item) => (
                    <li key={item.id}>
                      {item.title} · {item.location} · $
                      {item.price.toLocaleString()}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {activeRole === "Buyer" && (
        <section className="card">
          <div className="card-header">
            <h2>Alıcı Baxışı</h2>
          </div>
          <div className="card-body">
            <form className="form-grid" onSubmit={handleAddBuyerRequest}>
              <label>
                İstənilən lokasiya
                <input
                  value={buyerLocation}
                  onChange={(event) => setBuyerLocation(event.target.value)}
                  placeholder="Şəhər / qonşuluq"
                />
              </label>

              <label>
                Büdcə
                <input
                  type="number"
                  value={buyerBudget}
                  onChange={(event) => setBuyerBudget(event.target.value)}
                  placeholder="Maksimum büdcə"
                />
              </label>

              <button type="submit" className="primary-button">
                Sorğunu saxla
              </button>
            </form>

            <div>
              <h3 className="summary-title">Saxlanmış alıcı sorğuları</h3>
              {buyerRequests.length === 0 ? (
                <p className="empty-state">Henüz alıcı sorğusu yoxdur.</p>
              ) : (
                <ul className="summary-list">
                  {buyerRequests.map((item) => (
                    <li key={item.id}>
                      {item.location} · qədər ${item.budget.toLocaleString()}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {activeRole === "Realtor" && (
        <section className="card">
          <div className="card-header">
            <h2>Agent Paneli</h2>
          </div>
          <div className="card-body">
            <p className="dashboard-copy">
              Mülkləri nəzərdən keçirin və eyni lokasiyada alıcı büdcəsinə uyğun siyahıları müəyyən edin.
            </p>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Başlıq</th>
                    <th>Lokasiya</th>
                    <th>Qiymət</th>
                    <th>Status</th>
                    <th>Fəaliyyət</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="empty-table">
                        Siyahı mövcud deyil.
                      </td>
                    </tr>
                  ) : (
                    listings.map((item) => {
                      const matched = matchListing(item, buyerRequests);
                      return (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td>{item.location}</td>
                          <td>${item.price.toLocaleString()}</td>
                          <td>
                            <span className={`badge ${matched ? "match" : "no-match"}`}>
                              {matched ? "Uyğun" : "Uyğun deyil"}
                            </span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="ghost-button"
                              onClick={() => alert("Abonelik Tələb Olunur")}
                            >
                              Əlaqəni Göstər
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            <div className="dashboard-footer">
              {listings.length} siyahı · {buyerRequests.length} sorğu
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
