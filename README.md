Guide questions

1. Why do we use two separate states, searchText and debouncedSearch, instead of only one?
    - searchText stores what the user is currently typing, while debouncedSearch stores the search keyword after the user pauses typing for 300 milliseconds. This prevents filtering from happening on every keystroke.

2. What would happen if the debounce effect did not return a cleanup function?
    - Previous timers would not be cancelled. Multiple timers could run and update the search value unnecessarily.

3. What is the purpose of the dependency array? What happens if it is empty ([])? What happens if it is left out completely?
    - The dependency array determines when useEffect runs. An empty array means it runs after the initial render only. If omitted, the effect runs after every render.

4. Why should we avoid sorting the original products array directly?
    - Sorting the original array changes its order permanently. We make a copy first so the original product data remains unchanged.

5. Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.
    - It is better to calculate the filtered product list during rendering because it depends on existing state values. This avoids storing duplicate data and keeps the results updated whenever the filters change.