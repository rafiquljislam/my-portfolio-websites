import React from 'react'

const ContactItem = ({ title, image, link }) => {
    return (
        <div className="contact__single">
            <div className="contact__single_img">
                <img src={image} alt="" />
            </div>
            <div className="contact__single__repper">
                <div className="contact__single__header">
                    <h4>{title}</h4>
                </div>
                <div className="contact__single__body">
                    {link}
                </div>
            </div>
            <div className="contact__single__icon">
                {
                    title === "Phone" ?
                        (
                            <a href={`tel:${link}`} rel="noreferrer" target="_blank">
                                <i class="fa fa-link" aria-hidden="true"></i>
                            </a>
                        )
                        :
                        title === "Email" ?
                            (
                                <a href={`mailto:${link}`} rel="noreferrer" target="_blank">
                                    <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            )
                            :
                            (
                                <a href={link} rel="noreferrer" target="_blank">
                                    <i class="fa fa-link" aria-hidden="true"></i>
                                </a>
                            )
                }
            </div>

        </div>
    )
}

export default ContactItem
