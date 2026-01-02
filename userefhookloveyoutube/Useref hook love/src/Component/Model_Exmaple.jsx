import { useEffect, useRef, useState } from "react";

function AuthDropdown() {
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);
  const authDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        authDropdownRef.current &&
        !authDropdownRef.current.contains(event.target)
      ) {
        setShowAuthDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={authDropdownRef}>
      <button
        onClick={() => setShowAuthDropdown(!showAuthDropdown)}
        className="w-10 h-10 rounded-full bg-teal-500 text-white"
      >
        User
      </button>

      {showAuthDropdown && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-md">
          <p>Profile</p>
          <p>Logout</p>
        </div>
      )}
    </div>
  );
}

export default AuthDropdown;
// 📌 Explanation (Simple & Clear)

// 1️⃣ useRef

// const authDropdownRef = useRef(null);


// Stores reference of dropdown div

// Does NOT cause re-render

// 2️⃣ Attach ref

// <div ref={authDropdownRef}>


// Connects ref to actual DOM element

// 3️⃣ useEffect with event listener

// document.addEventListener("mousedown", handleClickOutside);


// Listens for click anywhere on page

// 4️⃣ Check outside click

// !authDropdownRef.current.contains(event.target)


// If click is NOT inside dropdown → close it

// 5️⃣ Cleanup

// return () => removeEventListener(...)


// Prevents memory leak

// 🧠 Real-Life Meaning

// Click profile icon → menu opens

// Click outside → menu closes