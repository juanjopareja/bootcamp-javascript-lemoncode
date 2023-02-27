// EJERCICIO 02 MOD03 - CÁLCULO NÓMINA SIN FUNCIONES //

// Estructura de datos
const empleado = { 
    bruto: 12600,
    contrato: 2, // "0 = indefinido", " 1 = completo", "2 = parcial"
    hijos: 2,
    pagas: 12
};


// Variables
let salarioBase, totalDevengo;
let pagaExtra, extraProrr;
let baseCotConCom, cotCom;
let tipoCont, cotDes, cotForm;
let tipoRet, retCuent, bonoHijos;
let totDeduc, totNet;


// Cálculo del devengo
salarioBase = empleado.bruto / 14;
pagaExtra = empleado.pagas === 12 ? salarioBase * 2 / 12 : salarioBase;
extraProrr = empleado.pagas === 12 ? true : false;
totalDevengo = empleado.pagas === 12 ? salarioBase + pagaExtra : salarioBase;


// Cálculo de las deducciones
    // Base de CC
baseCotConCom = empleado.pagas === 14 ? salarioBase : salarioBase + pagaExtra;

    // Contingencias comunes
        // Cotización por contingencias comunes
cotCom = baseCotConCom * 0.047;

        // Cotización por desempleo según tipo de contrato
tipoCont = empleado.contrato === 0 ? 0.0155 : 0.0160;
cotDes = baseCotConCom * tipoCont;

        // Cotización por formación profesional
cotForm = baseCotConCom * 0.001;

    // IRPF
        // Retención según rango de salario
if (empleado.bruto < 12450) {
    tipoRet = 0;
} else if (empleado.bruto >= 12450 && empleado.bruto < 20200) {
    tipoRet = 0.24;
} else if (empleado.bruto >= 20200 && empleado.bruto < 35200) {
    tipoRet = 0.30;
} else if (empleado.bruto >= 35200 && empleado.bruto < 60000) {
    tipoRet = 0.37;
} else if (empleado.bruto >= 60000 && empleado.bruto < 300000) {
    tipoRet = 0.45;
} else {
    tipoRet = 0.47;
};

        // Bonificación según número de hijos
bonoHijos = empleado.hijos > 0 ? true : false;
tipoRet = bonoHijos ? tipoRet - 0.20 : tipoRet;

        // Retención a cuenta IRPF
cotIrpf = baseCotConCom * tipoRet;

        // Total deducciones
totDeduc = cotCom + cotDes + cotForm + cotIrpf;


// Resultados por consola
console.log("///// EJERCICIO 02 - CÁLCULO DE UNA NÓMINA MENSUAL /////");
console.log("");
console.log("Salario Bruto: " + parseFloat(Math.round(empleado.bruto * 100) / 100).toFixed(2) + "€");
console.log("Tipo de contrato: " + empleado.contrato + " --> (0)Indefinido, (1)Tiempo Comp., (2)Tiempo Parc.");
console.log("Número de hijos: " + empleado.hijos);
console.log("Número de pagas: " + empleado.pagas);
console.log("");

console.log("DEVENGOS");
console.log("Percepciones Salariales:");
console.log("\tSalario Base: " + parseFloat(Math.round(salarioBase * 100) / 100).toFixed(2) + "€");
if (extraProrr) console.log("\tPaga Extra Prorrateada: " + parseFloat(Math.round(pagaExtra * 100) / 100).toFixed(2) + "€");
console.log("\tTotal Devengado: " + parseFloat(Math.round(totalDevengo * 100) / 100).toFixed(2) + "€");
console.log("");

console.log("DEDUCCIONES");
console.log("Aportación Cotizaciones SS:");
console.log("\tContingencias Comunes(4.7%): " + parseFloat(Math.round(cotCom * 100) / 100).toFixed(2) + "€");
console.log("\tDesempleo(" + (tipoCont * 100) + "%): " + parseFloat(Math.round(cotDes * 100) / 100).toFixed(2) + "€");
console.log("\tFormación Profesional(0.1%): " + parseFloat(Math.round(cotForm * 100) / 100).toFixed(2) + "€");
console.log("\tRetenciones a cuenta de IRPF(" + (parseFloat(Math.round(tipoRet * 100) / 100).toFixed(2) * 100) + "%): " + 
parseFloat(Math.round(cotIrpf * 100) / 100).toFixed(2) + "€");
console.log("\tTotal a deducir: " + parseFloat(Math.round(totDeduc * 100) / 100).toFixed(2) + "€");
console.log("");

console.log("LÍQUIDO A PERCIBIR: " + parseFloat(Math.round((totalDevengo - totDeduc) * 100) / 100).toFixed(2) + "€");
console.log("");

console.log("BASES COTIZACIÓN A LA S.S.");
console.log("\tBase Cot. Com: " + parseFloat(Math.round(baseCotConCom * 100) / 100).toFixed(2) + "€");
console.log("\tBase sujeta a IRPF: " + parseFloat(Math.round(baseCotConCom * 100) / 100).toFixed(2) + "€");
console.log("");