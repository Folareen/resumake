import React from 'react'

const UserDataForm = () => {
    return (
        <div>
            UserDataForm
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="City" />
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default UserDataForm