const { create } = require('xmlbuilder2')

function execute() {
    const root = create({version: '1.0'})
        .ele('OTA_HotelAvailRQ', {
            xmlns: 'http://www.opentravel.org/OTA/2003/05',
            "xmlns:xsi": 'http://www.w3.org/2001/XMLSchema-instance',
            EchoToken: 'HP',
            TimeStamp: '2015-04-01T12:31:54Z',
            Version: '2.001',
            PrimaryLangID: 'EN'
        })
        .ele('POS')
        .ele('Source')
        .ele('RequestorID', {
            Type: '13',
            ID: 'TED',
            ID_Context: 'TARS',
        })
        .up().up().up()
        .ele('AvailRequestSegments').ele('AvailRequestSegment')
        .ele('StayDateRange', {
            Start: '2015-08-30',
            End: '2015-09-02',
        }).up()
        .ele('RatePlanCandidates').ele('RatePlanCandidate', {
            RatePlanCode: 'RA1TED',
        }).up().up()
        .ele('RoomStayCandidates')
        .ele('RoomStayCandidate', {
            RoomTypeCode: 'DBC',
            Quantity: '1'
        })
        .ele('GuestCounts', {
            IsPerRoom: 'true',
        })
        .ele('GuestCount', {
            AgeQualifyingCode: '10',
            Count: '1'
        })
        .up().up().up().up()
        .ele('HotelSearchCriteria')
        .ele('Criterion')
        .ele('HotelRef', {
            HotelCode: '0903'
        })

    const result = root.end({prettyPrint: false});
    return result
}

// 90125 nanoseconds
module.exports = {
    execute,
};
