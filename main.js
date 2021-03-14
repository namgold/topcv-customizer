const topCVCustomizer = () => {

    var style = $(`
        <style>
            .cvo-certification-title-wraper {
                width: 85%
            }
            .cvo-certification-time {
                width: 15%
            }
            .cvo-education-time, .cvo-experience-time, .cvo-activity-time, .cvo-award-time {
                width: 27%
            }

            .cvo-education-school-wrapper, .cvo-experience-company-wrapper, .cvo-activity-organization-wrapper, .cvo-award-title-wraper {
                width: 73%
            }
            @media print {
                #cvo-experience {page-break-before: always;}
            }

            span.code {
                background-color: #00b14f;
                padding: 1px 2px;
                white-space: nowrap;
                margin-left: 6px;
                color: white;
                border-radius: 3px;
            }

        </style>`);
    $('html > head').append(style);

    $('#cv-watermark').remove()

    $('#cvo-body').css('padding-bottom', 0)

    $('.contact-item-label')[0].innerText = 'YEAR OF BIRTH'
    $('.contact-item-label')[1].innerText = 'SEX'
    $('.contact-item-label')[2].innerText = 'PHONE NUMBER'
    $('.contact-item-label')[3].innerText = 'EMAIL'
    $('.contact-item-label')[4].innerText = 'ADDRESS'
    $('.contact-item-label')[5].innerText = 'WEBSITE'
    const websiteLink = $('#cvo-profile-website')[0].innerText;
    const formatedWebsiteLink = websiteLink.startsWith('http') ? websiteLink : 'http://' + websiteLink;
    $('#cvo-profile-website')[0].innerHTML = '<a href = ' + formatedWebsiteLink + '>' + websiteLink + '</a>'


    let skills = $('#cvo-additional-information-details').contents().filter(function() {return this.nodeType == Node.TEXT_NODE;});
    let skillsHTML = '';
    $('#cvo-additional-information-details').contents().each((index, i) => {
        if (i.nodeType == Node.TEXT_NODE) {
            skillsHTML += i.textContent.replace(/&nbsp;/g, '').split(',').map(i => '<span class="code">' + i.trim() + '</span>').join('');
        } else if (i.nodeName == 'B') {
            skillsHTML += '</div><div>' + i.outerHTML.replace(/&nbsp;/g, '') + ':' ;
        } else if (i.nodeName == 'BR') {
        } else {
            // skillsHTML += i.outerHTML.replace(/&nbsp;/g, '') + ':';
        }
    })

    document.getElementById('cvo-additional-information-details').innerHTML = '<div>' + skillsHTML + '</div>';
}

topCVCustomizer

topCVCustomizer();