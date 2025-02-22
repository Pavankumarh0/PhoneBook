document.addEventListener('DOMContentLoaded', () => {
    const contacts = [
        { name: 'John Doe', phone: '123-456-7890' },
        { name: 'Jane Smith', phone: '987-654-3210' },
    ];

    const contactListDiv = document.querySelector('.contact-list');
    const searchInput = document.getElementById('search');
    const dialButton = document.getElementById('dial-button');
    const dialMessage = document.getElementById('dial-message');

    // Function to display contacts
    function displayContacts(contactList) {
        contactListDiv.innerHTML = '';
        contactList.forEach(contact => {
            const contactCard = document.createElement('div');
            contactCard.classList.add('contact-card');
            contactCard.innerHTML = `
                <h3>${contact.name}</h3>
                <p>${contact.phone}</p>
            `;
            contactListDiv.appendChild(contactCard);
        });
    }

    // Display all contacts on load
    displayContacts(contacts);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm)
        );
        displayContacts(filteredContacts);
    });

    // Dial pad functionality
    const dialPadButtons = document.querySelectorAll('.dial-btn');
    let dialedNumber = '';

    dialPadButtons.forEach(button => {
        button.addEventListener('click', () => {
            dialedNumber += button.textContent;
            dialMessage.textContent = `Dialing: ${dialedNumber}`;
        });
    });

    // Dial button functionality
    dialButton.addEventListener('click', () => {
        if (dialedNumber) {
            dialMessage.textContent = 'Insert SIM card to make a call.';
        } else {
            dialMessage.textContent = 'Please enter a number.';
        }

        // Reset the dialed number after displaying the message
        setTimeout(() => {
            dialedNumber = '';
            dialMessage.textContent = '';
        }, 2000);
    });
});

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', () => {
    const dialMessage = document.getElementById('dial-message');
    const dialButton = document.getElementById('dial-button');
    const deleteButton = document.getElementById('delete-button');
    let dialedNumber = '';

    // Handle Dial Pad button click
    const dialPadButtons = document.querySelectorAll('.dial-btn');
    dialPadButtons.forEach(button => {
        button.addEventListener('click', () => {
            dialedNumber += button.textContent;
            dialMessage.textContent = dialedNumber;
        });
    });

    // Handle Delete button click
    deleteButton.addEventListener('click', () => {
        if (dialedNumber.length > 0) {
            dialedNumber = dialedNumber.slice(0, -1);
            dialMessage.textContent = dialedNumber;
        }
    });

    // Handle Dial button click
    dialButton.addEventListener('click', () => {
        if (dialedNumber) {
            dialMessage.textContent = 'Insert SIM card to make a call.';
        } else {
            dialMessage.textContent = 'Please enter a number.';
        }

        // Reset the dialed number after displaying the message
        setTimeout(() => {
            dialedNumber = '';
            dialMessage.textContent = '';
        }, 2000);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const contacts = [
        { name: 'John Doe', phone: '123-456-7890' },
        { name: 'Jane Smith', phone: '987-654-3210' },
        // Add more contacts here
    ];

    const contactListDiv = document.querySelector('.contact-list');
    const searchInput = document.getElementById('search');
    const addContactForm = document.getElementById('addContactForm');

    // Function to display contacts
    function displayContacts(contactArray) {
        contactListDiv.innerHTML = '';
        contactArray.forEach(contact => {
            const contactCard = document.createElement('div');
            contactCard.classList.add('contact-card');
            contactCard.innerHTML = `<h3>${contact.name}</h3><p>Phone: ${contact.phone}</p>`;
            contactListDiv.appendChild(contactCard);
        });
    }

    // Initial display
    displayContacts(contacts);

    // Search functionality using Binary Search (simplified)
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm)
        );
        displayContacts(filteredContacts);
    });

    // Add contact functionality
    addContactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        if (name && phone) {
            contacts.push({ name, phone });
            // Sort the array alphabetically (DSA - Quick Sort example)
            contacts.sort((a, b) => a.name.localeCompare(b.name));
            displayContacts(contacts);
            addContactForm.reset();
        }
    });
});
