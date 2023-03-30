import React, {useState} from 'react';

const LoginForm = ({users, setLoggedInUser}) => {
    const [selectedUser, setSelectedUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoggedInUser(selectedUser);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="user-select">Select user:</label>
            <select id="user-select" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                <option value="">-- Select user --</option>
                {users.map((user) => (
                    <option key={user.name} value={user.name}>
                        {user.name}
                    </option>
                ))}
            </select>
            <button type="submit">Log in</button>
        </form>
    );
};


export default LoginForm;