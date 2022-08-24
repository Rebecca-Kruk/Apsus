import { MailList } from "../cmps/mail-list.jsx";
import { MailOptions } from "../cmps/mail-options.jsx";
import { MailHeader } from "../cmps/mail-header.jsx";

export  function MailIndex()  {

        return (
            <div className="mail-app-container">
                <MailHeader/>
                <main className="mail-container">
                    <MailOptions />
                    <MailList />
                </main>
            </div>
        )
    
}
