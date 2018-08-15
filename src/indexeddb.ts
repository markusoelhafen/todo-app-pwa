import idb from 'idb';

const DB_NAME = "User Database"
const DB_VERSION = 1 
const DB_STORE_NAME = "Users"

let DB:any;

export function openDB() {
  console.log("Opening DB \"" + DB_NAME + "\"...");

  const req = indexedDB.open(DB_NAME, DB_VERSION);
  
  req.onsuccess = (e: any) => {
    DB = e.target.result;
    console.log("Successfully opened Database", DB);
    return DB;
  }

  req.onerror = (e) => {
    console.log("openDB: " + e.target)
  } 

  req.onupgradeneeded = (e) => {
    console.log("Upgrading Database...");

    const store = req.result.createObjectStore(DB_STORE_NAME, {autoIncrement: true});
    
    store.createIndex('username', 'username', {unique: false});
  }
}

export function displayData() {
  const store = getObjectStore(DB_STORE_NAME, 'readonly');
  
  let req;

  req = store.openCursor()
  req.onsuccess = (e:any) => {
    const cursor = e.target.result

    if(cursor){
      req = store.get(cursor.key);
      req.onsuccess = (ev:any) => {
        const value = ev.target.result
        console.log("cursor: ", value.username);
      }
      cursor.continue();
    } else {
      console.log("no more entries");
    }
  }
}

export async function getData() {
  await indexedDB.open(DB_NAME, DB_VERSION);
  const store = await getObjectStore(DB_STORE_NAME, 'readonly');

  let req;
  const data: string[] = [];

  req = await store.openCursor();

  req.onsuccess = (e:any) => {
    const cursor = e.target.result

    if(cursor){
      req = store.get(cursor.key);
      req.onsuccess = (ev:any) => {
        const value = ev.target.result
        data.push(value);
      }
      cursor.continue();
    } else {
      console.log("no more entries");
    }
    return data;
  }

}

export async function writeData(DATA: object) {
  DB = await idb.open(DB_NAME, 1, upgradeDB => upgradeDB.createObjectStore(DB_STORE_NAME, { autoIncrement: true }))

  const tx = DB.transaction(DB_STORE_NAME, 'readwrite');
  const store = tx.objectStore(DB_STORE_NAME);

  await store.put(DATA)
  await tx.complete;
  DB.close();  
}

export async function getAllData() {
  DB = await idb.open(DB_NAME, 1, upgradeDB => upgradeDB.createObjectStore(DB_STORE_NAME, { autoIncrement: true }))

  /* 
    TODO: Nachdem die Tabelle händisch im Browser gelöscht wurde, erstellt er keine neuen und kackt ab :D sorry
  */
  const tx = DB.transaction(DB_STORE_NAME, 'readwrite');
  const store = tx.objectStore(DB_STORE_NAME);

  const allSavedItems = await store.getAll()
  console.log(allSavedItems);

  await DB.close()
  return allSavedItems;
}

export function readObjectStore() {
  const store = getObjectStore(DB_STORE_NAME, 'readwrite');
  
  console.log(store);
}

export function getObjectStore(storeName: string, mode: string) {
  console.log("db:",DB);
  const tx = DB.transaction(storeName, mode);
  return tx.objectStore(storeName);
}