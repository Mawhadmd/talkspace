import React from 'react';

const HowToStartACall: React.FC = () => {
    return (
        <div className='flex  flex-col'>
            <h1 className='mb-8 text-mainTextColor text-6xl font-semibold'>How to Start a Video Call</h1>
            <ol className='mx-4 list-decimal pl-4 text-xl text-secTextColor'>
                <li>Open the video call application on your device.</li>
                <li>Log in to your account using your credentials.</li>
                <li>Navigate to the contacts or friends list.</li>
                <li>Select the contact you want to start a video call with.</li>
                <li>Click on the video call icon or button.</li>
                <li>Wait for the contact to accept the call.</li>
                <li>Once the call is accepted, you can start your video conversation.</li>
            </ol>
            <p className='text-mainTextColor text-xl mt-5 font-bold'>Make sure your camera and microphone are enabled and working properly before starting the call.</p>
        </div>
    );
};

export default HowToStartACall;