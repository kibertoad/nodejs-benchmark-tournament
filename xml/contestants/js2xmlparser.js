const parser = require('js2xmlparser');

function execute() {
    const xmlObject = {
        OTA_HotelAvailRQ: {
            "@": {
                xmlns: 'http://www.opentravel.org/OTA/2003/05',
                "xmlns:xsi": 'http://www.w3.org/2001/XMLSchema-instance',
                EchoToken: 'HP',
                TimeStamp: '2015-04-01T12:31:54Z',
                Version: '2.001',
                PrimaryLangID: 'EN'
            },
            POS: {
                Source: {
                    RequestorID: {
                        "@": {
                            Type: '13',
                            ID: 'TED',
                            ID_Context: 'TARS',
                        }
                    }
                }
            },
            AvailRequestSegments: {
                AvailRequestSegment: {
                    StayDateRange: {
                        "@": {
                            Start: '2015-08-30',
                            End: '2015-09-02',
                        }
                    },
                    RatePlanCandidates: {
                        RatePlanCandidate: {
                            "@": {
                                RatePlanCode: 'RA1TED',
                            }
                        }
                    },
                    RoomStayCandidates: {
                        RoomStayCandidate: {
                            "@": {
                                RoomTypeCode: 'DBC',
                                Quantity: '1'
                            },
                            GuestCounts: {
                                "@": {
                                    IsPerRoom: 'true',
                                },
                                GuestCount: {
                                    "@": {
                                        AgeQualifyingCode: '10',
                                        Count: '1'
                                    }
                                }
                            }
                        }
                    },
                    HotelSearchCriteria: {
                        Criterion: {
                            HotelRef: {
                                "@": {
                                    HotelCode: '0903'
                                }
                            }
                        }
                    }
                }
            },
        }
    }

    const config = {format: {pretty: false, doubleQuotes: true}}
    const result = parser.parse('root', xmlObject, config)

    return result
}

module.exports = {
    execute,
};
