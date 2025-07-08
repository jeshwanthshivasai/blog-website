import { useState } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
    const[isSubmitting, setIsSubmitting] = useState(false);
    const[stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY',
            )
            .then (
                (result) => {
                    setStateMessage('Message Sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000)
                },
            );
        e.target.reset();
    };
    return (
        <>
        {/* <div className=""> */}
            <form onSubmit={sendEmail} className="bg-white bg-opacity-90 backdrop-blur-md lg:p-10 p-5 rounded-xl shadow-2xl max-w-2xl min-w-full m-auto">
                <div className="mb-5">
                    <label className="block mb-2 text-lg font-semibold text-neutral-800">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 border border-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-lg font-semibold text-neutral-800">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="YourName@gmail.com"
                        required
                        className="w-full px-4 py-2 border border-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-lg font-semibold text-neutral-800">Message</label>
                    <textarea
                        name="message"
                        rows="6"
                        required
                        className="w-full px-4 py-2 border border-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                    ></textarea>
                </div>
                <input
                    type="submit"
                    value={isSubmitting ? "Sending..." : "Send"}
                    disabled={isSubmitting}
                    className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full cursor-pointer hover:bg-orange-600 transition disabled:opacity-50"
                />
                {stateMessage && <p className="mt-4 text-center text-lg font-medium text-orange-500">{stateMessage}</p>}
            </form>
        {/* </div> */}
        </>
    );
};

export default Form;