//subito dopo aver creato i componenti transazioni-lista (che sarà genitore) e transazione-item (che diventerà figlio) e il file in cui ho salvato i dati, ho creato questo file in cui ho scritto il modello per le transazioni, ovvero il tipo transazione a cui dovranno ripondere tutti i dati che porteranno alla generazione dell'html --> il tipo è strutturato proprio come i dati contenuti in una costante nel file transazioni.ts nella cartella data (normalmente li prenderei da un server)

export type Transazione = {

    amount: number;
    date: number;
    business: string;
    name: string;
    type: string;
    account: string;

}