const carStatusData = [
    { no: 1, carNo: "6465", driver: "Alex Noman", status: "Completed", earning: "$35.44", color: "green" },
    { no: 2, carNo: "5665", driver: "Razib Rahman", status: "Pending", earning: "$0.00", color: "blue" },
    { no: 3, carNo: "1755", driver: "Luke Norton", status: "In route", earning: "$23.50", color: "red" }
  ];
  
  const tbody = document.getElementById("car-status-body");
  
  carStatusData.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.no}</td>
      <td>${item.carNo}</td>
      <td>${item.driver}</td>
      <td><span style="color:${item.color}; font-weight:bold;">●</span> ${item.status}</td>
      <td>${item.earning}</td>
      <td><button style="color:blue;">Details</button></td>
    `;
    tbody.appendChild(tr);
  });
  