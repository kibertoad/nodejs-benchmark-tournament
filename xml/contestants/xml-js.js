const convert = require('xml-js');

function execute() {
    const xmlObject = {
        _declaration: {
            _attributes: {
                version: "1.0"
            }
        },
        OTA_HotelAvailRQ: {
            _attributes: {
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
                        _attributes: {
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
                        _attributes: {
                            Start: '2015-08-30',
                            End: '2015-09-02',
                        }
                    },
                    RatePlanCandidates: {
                        RatePlanCandidate: {
                            _attributes: {
                                RatePlanCode: 'RA1TED',
                            }
                        }
                    },
                    RoomStayCandidates: {
                        RoomStayCandidate: {
                            _attributes: {
                                RoomTypeCode: 'DBC',
                                Quantity: '1'
                            },
                            GuestCounts: {
                                _attributes: {
                                    IsPerRoom: 'true',
                                },
                                GuestCount: {
                                    _attributes: {
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
                                _attributes: {
                                    HotelCode: '0903'
                                }
                            }
                        }
                    }
                }
            },
        }
    }

    const options = {compact: true, spaces: 0}
    const result = convert.js2xml(xmlObject, options)

    return result
}

// 26471 nanoseconds
module.exports = {
    execute,
};
