import React from 'react';
function Message() {
  return (
    <div className="Message">
        <div className="flex justify-center">
            <div className="bg-white rounded-xl flex justify-between p-10">
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.7101838727813!2d73.81269391441676!3d18.51775927409431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb9e53a05f9%3A0x2be5e8da02be693e!2sMIT%20World%20Peace%20University!5e1!3m2!1sen!2sin!4v1608440238005!5m2!1sen!2sin" className="h-96 w-96"></iframe>
                </div>
                <div className="mx-20">
                    <form className="flex flex-col">
                        <label for="name">
                            Name
                        </label>
                        <input className="border-b-2 border-primary outline-none my-2" type="text" name="name" id="name" />
                        <label for="email">
                            Email
                        </label>
                        <input className="border-b-2 border-primary outline-none " type="email" name="email" id="email" />
                        <label for="msg">
                            Message
                        </label>
                        <textarea className="outline-none border-b-2 border-primary" name="msg" id="msg" />
                    </form>
                </div>                      
            </div>
        </div>
    </div>
  );
}
export default Message;