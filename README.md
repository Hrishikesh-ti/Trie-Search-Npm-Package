# TrieSearch - Efficient String Search Using Trie

**TrieSearch** is a lightweight and high-performance JavaScript library that uses the Trie (prefix tree) data structure to efficiently search through arrays of strings or objects. It supports searching with blazing speed, capable of finding results in large datasets (e.g., 20,000 words) in under **1 millisecond**.

---

  
## 🚀 **Features**
- 🔍 **Fast Search:** Efficiently search through large datasets using Trie.  
- 📂 **Flexible Input:** Supports arrays of strings or arrays of objects (with a specified key).  
- 🛠 **Customizable:** Easily adapt to different use cases by providing the field to search for in object arrays.  
- ⚡ **Performance:** Handles thousands of entries in milliseconds.

---



  
## 📥 **Installation**
Install the package using npm:  
```javascript
npm install search-optimized-filter
```



  
## 📘 **Usage**

### 1. Searching an Array of Strings
```javascript
   import TrieSearch from "search-optimized-filter";
   const words = ["hello", "world", "hii", "trie", "search", "how are you"];
   const trie = new TrieSearch(words);
   // Search for words starting with "h"
   console.log(trie.suggest("h")); // Output: ["hii","hello","how are you"] 
```
### 2. Searching an Array of Objects If the input is an array of objects </br>
   specify the key to search for:
```javascript
   import TrieSearch from "search-optimized-filter";
  
   const data = [
     { name: "john", age: 10 },
     { name: "jane", age: 20 },
     { name: "mark", age: 23 },
     { name: "bob", age: 25 },
     { name: "alliss", age: 5 },
     { name: "aston", age: 30 },
   ];
  
   const trie = new TrieSearch(data, "name");
  
   // Search for names starting with 'a'
   console.log(trie.suggest("a")); // Output: ["alliss", "aston"]

```


##  

> [!IMPORTANT]
> Initialize the TrieSearch object in the parent component to avoid regenerating the trie on every render, as building the trie is the most time-consuming operation and is unnecessary if the data doesn't change.

  

## ⚙️ **API Reference**

**Constructor**
```javascript
new TrieSearch(array, [key])
```
- `array`: The dataset to be used. Can be an array of strings or an array of objects.
- `key`: _(Optional)_ The key in the object to search for (required if the input is an array of objects).  


**Methods**
1. `insert(word)`
Inserts a word into the Trie.(Internally used; rarely needed directly).
2. `suggest(prefix)`
Returns an array of words or object values that match the given prefix.
  - `prefix`: The prefix string to search for.



## 💡 **Optimization Tip**

If you're using **TrieSearch** in a React or similar framework where state updates may trigger re-renders, consider initializing the `TrieSearch` object **once** in a parent or higher-level component.  

This prevents unnecessary re-creation of the Trie structure on every render, especially when the `words` array remains unchanged. Since generating the Trie is the most time-intensive operation, this approach ensures optimal performance.

### Example:
Parent Component
```javascript
   import React, { useState } from "react";
   import TrieSearch from "trie-search";
   import Child from "./Child";
   
   const Parent = () => {
     const words = ["apple", "banana", "grape", "orange", "mango"];
     const trie = new TrieSearch(words); // Create TrieSearch object here
     const [searchTerm, setSearchTerm] = useState("");
   
     return (
       <div>
         <h1>TrieSearch Example</h1>
         <input
           type="text"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           placeholder="Type to search..."
         />
         <Child trie={trie} searchTerm={searchTerm} />
       </div>
     );
   };
   
   export default Parent;
```

Child Component
```javascript
import React from "react";

const Child = ({ trie, searchTerm }) => {
  const results = trie.suggest(searchTerm); // Use the suggest function

  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default Child;
```


  
## 🏎️ **Performance**

**TrieSearch** is optimized for high performance, capable of searching 20,000 words in under 1 millisecond.  
Here\'s a performance screenshot:

<img width="500" alt="Screenshot 2024-11-16 at 8 31 25 PM" src="https://github.com/user-attachments/assets/73a0a125-7436-44c2-914b-acb4614f60d6">


  
<br>

  
## 🌟 **Why Use TrieSearch?**

- Perfect for autocomplete, predictive text, or any search functionality requiring lightning-fast results.
- Easy-to-use API with seamless integration into existing JavaScript or Node.js projects.
- Flexible handling of both arrays of strings and arrays of objects.



## 📄 **Example Code**

```javascript
import TrieSearch from "search-optimized-filter";

// Example 1: Array of Strings
const words = ["apple", "banana", "grape", "orange", "mango"];
const trie1 = new TrieSearch(words);
console.log(trie1.suggest("gr")); // Output: ["grape"]

// Example 2: Array of Objects
const data = [
  { name: "alice", age: 30 },
  { name: "bob", age: 25 },
  { name: "charlie", age: 35 },
];
const trie2 = new TrieSearch(data, "name");
console.log(trie2.suggest("al")); // Output: ["alice"]

```


  
## 📦 **Package Details**
- Language: JavaScript (Node.js)
- Dependencies: None



  
## 🛠️ **Contributing**

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit pull requests. 


  

## 📃 **License**

This project is licensed under the MIT License. 

**Start optimizing your search today with TrieSearch!** 🚀

