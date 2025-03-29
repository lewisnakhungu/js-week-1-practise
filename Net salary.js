
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Income Tax)
    const paye = calculatePAYE(grossSalary);

    // Calculate SHIF Contribution
    const shif = grossSalary * 0.0275; 

    // Calculate NSSF Contribution
    const nssf = calculateNSSF(grossSalary);

    // Calculate Housing Levy
    const housingLevy = grossSalary * 0.015; // 1.5% of gross salary

    // Calculate Net Salary
    const netSalary = grossSalary - paye - shif - nssf - housingLevy;

    return {
        grossSalary: grossSalary.toFixed(2),
        paye: paye.toFixed(2),
        shif: shif.toFixed(2),
        nssf: nssf.toFixed(2),
        housingLevy: housingLevy.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}

function calculatePAYE(grossSalary) {
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = (24000 * 0.10) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.30);
    } else if (grossSalary <= 800000) {
        paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((grossSalary - 500000) * 0.325);
    } else {
        paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((800000 - 500000) * 0.325) + ((grossSalary - 800000) * 0.35);
    }
    return paye;
}

function calculateNSSF(grossSalary) {
    const tier1Limit = 8000;
    const tier2Limit = 72000;
    const tier1Rate = 0.06;
    const tier2Rate = 0.06;

    let tier1Contribution = 0;
    let tier2Contribution = 0;

    if (grossSalary <= tier1Limit) {
        tier1Contribution = grossSalary * tier1Rate;
    } else {
        tier1Contribution = tier1Limit * tier1Rate;
        if (grossSalary <= tier2Limit) {
            tier2Contribution = (grossSalary - tier1Limit) * tier2Rate;
        } else {
            tier2Contribution = (tier2Limit - tier1Limit) * tier2Rate;
        }
    }

    return tier1Contribution + tier2Contribution;
}

// Example usage:
const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(salaryDetails);
