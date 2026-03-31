import React, { PropsWithChildren, useState } from "react";
// Uncomment the next line if you’re using Next.js for routing
import { useRouter } from "next/navigation";

// Define the menu structure in a way that reflects the application’s hierarchy
const menuData = [
    {
        label: "Parent 1",
        path: "/parent1",
        children: [
            {
                label: "Subparent 1.1",
                path: "/subparent1–1",
                children: [
                    { label: "Child 1.1.1", path: "/child1–1–1" },
                    { label: "Child 1.1.2", path: "/child1–1–2" },
                ],
            },
            {
                label: "Subparent 1.2",
                path: "/subparent1–2",
                children: [
                    { label: "Child 1.2.1", path: "/child1–2–1" },
                ],
            },
        ],
    },
    {
        label: "Parent 2",
        path: "/parent2",
        children: [
            {
                label: "Subparent 2.1",
                path: "/subparent2–1",
                children: [
                    { label: "Child 2.1.1", path: "/child2–1–1" },
                ],
            },
        ],
    },
    {
        label: "Parent 3",
        path: "/parent3",
    },
];

const MultilevelMenu = () => {
    // Manage the current level of the menu hierarchy the user is viewing
    const [currentLevel, setCurrentLevel] = useState(menuData);
    // Keep a history stack to enable "Back" navigation
    const [history, setHistory] = useState([]);
    // Toggle the visibility of the menu
    const [menuVisible, setMenuVisible] = useState(false);
    // Uncomment the next line if you’re using Next.js for navigation
    const router = useRouter();

    // Handles navigation within the menu
    const handleMenuClick = ({ item }: { item: PropsWithChildren }) => {
        if (item.children) {
            // If the item has children, save the current level and move to the next
            setHistory((prevHistory) => [...prevHistory, currentLevel]);
            setCurrentLevel(item.children);
        } else {
            // Navigate to the item’s path if it’s a leaf node
            router.push(item.path); // Uncomment if using Next.js
        }
    };

    // Handles going back to the previous menu level
    const handleBack = () => {
        if (history.length > 0) {
            const previousLevel = history[history.length - 1];
            setCurrentLevel(previousLevel);
            setHistory((prevHistory) => prevHistory.slice(0, -1));
        }
    };

    // Toggles the visibility of the menu
    const toggleMenu = () => {
        setMenuVisible((prev) => !prev);
    };

    return (
        <div>
            {/* The hamburger button for toggling the menu */}
            <button onClick={toggleMenu}>
                {menuVisible ? "Close Menu" : "Open Menu"}
            </button>

            {/* Render the menu only when it is visible */}
            {menuVisible && (
                <div>
                    {/* Show the Back button only if there’s navigation history */}
                    {history.length > 0 && (
                        <button onClick={handleBack}>Back</button>
                    )}

                    {/* Display the current menu level */}
                    <ul>
                        {currentLevel.map((item, index) => (
                            <li key={index}>
                                <button onClick={() => handleMenuClick({ item })}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MultilevelMenu;