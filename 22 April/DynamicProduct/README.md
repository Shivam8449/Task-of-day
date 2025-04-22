# Dynamic Product List (React + Vite + Plain CSS)

## 🚀 Getting Started

```bash
npm install
npm run dev


🧠 Design Notes

Product data is loaded from a local JSON file in public/.
Favourites are tracked in localStorage under the key productFavs.
The card list is memoised using useMemo for performance when filtering or sorting.
No need for global state management – all state is managed locally within App.jsx.


