const CATEGORIAS_DE_DESCUENTO = {
    "Estudiante": 0.2,
    "Trainee": 0.5,
    "Junior": 0.85,
    "Otro": 1,
};

const TICKET_VALUE = 200;

function totalValue (numberOfTickets, discountType) {
    return (numberOfTickets * discountType * TICKET_VALUE).toFixed(2);
}

document.getElementById('btn-total').addEventListener('click', function (event) {
    let numberOfTickets = document.getElementById('amount-of-tickets').value;
    let discountType = CATEGORIAS_DE_DESCUENTO[document.getElementById('discount-type').value];
    document.getElementById("total-value").innerHTML = "Total a pagar: $" + totalValue(numberOfTickets, discountType);

    document.getElementById("total-value").style.display = "block";
  });

document.getElementById('btn-clear').onclick = function () {
    document.getElementById("total-value").style.display = "none";
};
