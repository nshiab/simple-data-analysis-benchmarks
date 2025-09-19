import { SimpleDB } from "@nshiab/simple-data-analysis";

const sdb = new SimpleDB();

const version = await sdb.customQuery("SELECT version() AS version;", {
    returnDataFrom: "query",
});

console.log("DuckDB version:", version);
