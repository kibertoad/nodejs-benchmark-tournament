const xml = require('xml')

function execute() {
    const xmlObject = {
        OTA_HotelAvailRQ: [
            {
                _attr: {
                    xmlns: 'http://www.opentravel.org/OTA/2003/05',
                    "xmlns:xsi": 'http://www.w3.org/2001/XMLSchema-instance',
                    EchoToken: 'HP',
                    TimeStamp: '2015-04-01T12:31:54Z',
                    Version: '2.001',
                    PrimaryLangID: 'EN'
                }
            },
            {
                POS: [
                    {
                        Source: [
                            {
                                RequestorID: [
                                    {
                                        _attr: {
                                            Type: '13',
                                            ID: 'TED',
                                            ID_Context: 'TARS',

                                        }
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                AvailRequestSegments: [{
                    AvailRequestSegment: [
                        {
                            StayDateRange: [
                                {
                                    _attr: {
                                        Start: '2015-08-30',
                                        End: '2015-09-02',
                                    }
                                },
                            ]
                        },
                        {
                            RatePlanCandidates: [{
                                RatePlanCandidate: [
                                    {
                                        _attr: {
                                            RatePlanCode: 'RA1TED',
                                        }
                                    },
                                ]
                            }]
                        },
                        {
                            RoomStayCandidates: [{
                                RoomStayCandidate: [
                                    {
                                        _attr: {
                                            RoomTypeCode: 'DBC',
                                            Quantity: '1'
                                        }
                                    },
                                    {
                                        GuestCounts: [
                                            {
                                                _attr: {
                                                    IsPerRoom: 'true',
                                                }
                                            },
                                            {
                                                GuestCount: [
                                                    {
                                                        _attr: {
                                                            AgeQualifyingCode: '10',
                                                            Count: '1'
                                                        }
                                                    },
                                                ]
                                            }]
                                    }]
                            }]
                        },
                        {
                            HotelSearchCriteria: [
                                {
                                    Criterion: [
                                        {
                                            HotelRef: [
                                                {
                                                    _attr: {
                                                        HotelCode: '0903'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }]
                }]
            }
        ]
    }
    const xmlOptions = {}

    const result = xml(xmlObject, xmlOptions)
    return result
}

module.exports = {
    execute,
};
