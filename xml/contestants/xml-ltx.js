const {createElement} = require('ltx')

function execute() {
    const xml = createElement('OTA_HotelAvailRQ', {
            xmlns: 'http://www.opentravel.org/OTA/2003/05',
            "xmlns:xsi": 'http://www.w3.org/2001/XMLSchema-instance',
            EchoToken: 'HP',
            TimeStamp: '2015-04-01T12:31:54Z',
            Version: '2.001',
            PrimaryLangID: 'EN'
        },
        createElement('POS', {},
            createElement('Source', {},
                createElement('RequestorID', {
                    Type: '13',
                    ID: 'TED',
                    ID_Context: 'TARS',

                }))),
        createElement('AvailRequestSegments', {},
            createElement('AvailRequestSegment', {},
                createElement('StayDateRange', {
                    Start: '2015-08-30',
                    End: '2015-09-02',
                }),
                createElement('RatePlanCandidates', {},
                    createElement('RatePlanCandidate', {
                        RatePlanCode: 'RA1TED',
                    })),
                createElement('RoomStayCandidates', {},
                    createElement('RoomStayCandidate', {
                            RoomTypeCode: 'DBC',
                            Quantity: '1'
                        },
                        createElement('GuestCounts', {
                                IsPerRoom: 'true',
                            },
                            createElement('GuestCount', {
                                AgeQualifyingCode: '10',
                                Count: '1'
                            })))),
                createElement('HotelSearchCriteria', {},
                    createElement('Criterion', {},
                        createElement('HotelRef', {
                            HotelCode: '0903'
                        })))
            ))
    )

    const result = xml.toString()
    return result
}

// 7187 nanoseconds
module.exports = {
    execute,
};
