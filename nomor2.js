var a  = [
    { 
        name : "https://dumbways.id",
        have : "domain"
    },
    { 
        name : "https://finance.detik.com",
        have : "subdomain"
    },
    { 
        name : "https://support.hostinger.co.id",
        have : "subdomain"
    },
    { 
        name : "https://jdih.kominfo.go.id",
        have : "subdomain"
    },
    { 
        name : "https://mamikos.com",
        have : "domain"
    }
];

let hasil = a.filter(a =>{
    return a.have === "subdomain";
});

console.log(hasil);