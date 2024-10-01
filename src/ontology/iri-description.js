const iri_description = {
    ":ActivitySequence": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ActivitySequence",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ActivitySequence",
        "Label": "ActivitySequence",
        "Description": "Embedded object to create a sequence of Activities in the context of a Service"
    },
    ":Actor": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Actor",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Actor",
        "Label": "Actor",
        "Description": "Superclass: Actors are Persons or entities acting like a single person"
    },
    ":Address": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Address",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Address",
        "Label": "Address",
        "Description": "Address details"
    },
    ":Adjustments": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Adjustments",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Adjustments",
        "Label": "Adjustments",
        "Description": "Adjustments in the context of CASS records"
    },
    ":Answer": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Answer",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Answer",
        "Label": "Answer",
        "Description": "Answer holds the answer to one Question and is provided by the executioner of the check"
    },
    ":BillingDetails": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#BillingDetails",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BillingDetails",
        "Label": "BillingDetails",
        "Description": "In the context of CASS2.0 process, BillingDetails object is used to integrate specific Billing and Settlement data requirements"
    },
    ":Booking": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Booking",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Booking",
        "Label": "Booking",
        "Description": "Booking object refers to a confirmed booking"
    },
    ":BookingOption": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#BookingOption",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingOption",
        "Label": "BookingOption",
        "Description": "Booking details"
    },
    ":BookingOptionRequest": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#BookingOptionRequest",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingOptionRequest",
        "Label": "BookingOptionRequest",
        "Description": "Request object, refers to the Quote request or Booking request "
    },
    ":BookingRequest": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#BookingRequest",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingRequest",
        "Label": "BookingRequest",
        "Description": "A party, ususally the freight forwarder, creates the BookingRequest in order to inform the Carrier that h wants to confirm a Booking"
    },
    ":BookingSegment": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#BookingSegment",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingSegment",
        "Label": "BookingSegment",
        "Description": "Booking Segment refers to the arrival and location details of a Booking Option Request or a Booking Option (offer or actual booking)"
    },
    ":BookingShipment": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#BookingShipment",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingShipment",
        "Label": "BookingShipment",
        "Description": "Simplified shipment object that is to be used only for the distribution scope where only a subset of data is known priori to operational phase."
    },
    ":BookingTimes": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#BookingTimes",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingTimes",
        "Label": "BookingTimes",
        "Description": "Previsouly called Schedule. This object refers to times used for the Booking Option Request (preferences part of the request) or the Booking Option (times sur as LAT where there is a commitment from the carrier)"
    },
    ":CO2Emissions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#CO2Emissions",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CO2Emissions",
        "Label": "CO2Emissions",
        "Description": "CO2 Calculation"
    },
    ":Carrier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Carrier",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Carrier",
        "Label": "Carrier",
        "Description": "Company details of carriers"
    },
    ":CarrierProduct": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#CarrierProduct",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CarrierProduct",
        "Label": "CarrierProduct",
        "Description": "Carrier product details"
    },
    ":Characteristic": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Characteristic",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Characteristic",
        "Label": "Characteristic",
        "Description": "Product additional details"
    },
    ":Check": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Check",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Check",
        "Label": "Check",
        "Description": "Action to describe a check"
    },
    ":CheckTemplate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#CheckTemplate",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CheckTemplate",
        "Label": "CheckTemplate",
        "Description": "heckTemplate is the body of a check, holding links to multiple Question LOs and is provided by the party in charge of the template that is used"
    },
    ":CheckTotalResult": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#CheckTotalResult",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CheckTotalResult",
        "Label": "CheckTotalResult",
        "Description": "CheckTotalResult holds the result of a Check and should be provided by the party executing and accounting for the check result"
    },
    ":CommonObjects": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#CommonObjects",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CommonObjects",
        "Label": "CommonObjects",
        "Description": "Common Object details"
    },
    ":Company": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Company",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Company",
        "Label": "Company",
        "Description": "Company details"
    },
    ":CompanyBranch": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#CompanyBranch",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CompanyBranch",
        "Label": "CompanyBranch",
        "Description": "Company branches"
    },
    ":Composing": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Composing",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Composing",
        "Label": "Composing",
        "Description": "Action to describe build-up or break-down of LoadingUnits"
    },
    ":ContactDetail": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ContactDetail",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ContactDetail",
        "Label": "ContactDetail",
        "Description": "Contact details"
    },
    ":Country": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Country",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Country",
        "Label": "Country",
        "Description": "Country details"
    },
    ":CustomsInformation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#CustomsInformation",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CustomsInformation",
        "Label": "CustomsInformation",
        "Description": "Customs information details"
    },
    ":DgDeclaration": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#DgDeclaration",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#DgDeclaration",
        "Label": "DgDeclaration",
        "Description": "Dangerous goods declaration"
    },
    ":DgProductRadioactive": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#DgProductRadioactive",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#DgProductRadioactive",
        "Label": "DgProductRadioactive",
        "Description": "Details of the radioactive products "
    },
    ":DgRadioactiveIsotope": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#DgRadioactiveIsotope",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#DgRadioactiveIsotope",
        "Label": "DgRadioactiveIsotope",
        "Description": "Details of the radioactive isotope contained in the product"
    },
    ":Dimensions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Dimensions",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Dimensions",
        "Label": "Dimensions",
        "Description": "Dimension details"
    },
    ":EmbeddedObject": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#EmbeddedObject",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#EmbeddedObject",
        "Label": "EmbeddedObject",
        "Description": "Embedded Object parent class, containing all common properties for Embedded Object"
    },
    ":EpermitConsignment": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#EpermitConsignment",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#EpermitConsignment",
        "Label": "EpermitConsignment",
        "Description": "Details of the pieces (Live animals) of the permit and specific information such as quantity measured and used to date quota"
    },
    ":EpermitSignature": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#EpermitSignature",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#EpermitSignature",
        "Label": "EpermitSignature",
        "Description": "Signature details of the Epermit for Live Animals"
    },
    ":EventUld": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#EventUld",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#EventUld",
        "Label": "EventUld",
        "Description": "Subtype of Event"
    },
    ":ExternalReference": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ExternalReference",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ExternalReference",
        "Label": "ExternalReference",
        "Description": "Reference documents details"
    },
    ":Geolocation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Geolocation",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Geolocation",
        "Label": "Geolocation",
        "Description": "Geolocation details - e.g. for drones, automated vehicles..."
    },
    ":HandlingInstructions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#HandlingInstructions",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#HandlingInstructions",
        "Label": "HandlingInstructions",
        "Description": "Used to provide handling instructions such as Special service request (SSR), Special handling codes (SPH) or Other service information (OSI)"
    },
    ":Insurance": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Insurance",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Insurance",
        "Label": "Insurance",
        "Description": "Insurance details"
    },
    ":IotDevice": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#IotDevice",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#IotDevice",
        "Label": "IotDevice",
        "Description": "IoT Device details"
    },
    ":Item": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Item",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Item",
        "Label": "Item",
        "Description": "Item details"
    },
    ":ItemDg": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ItemDg",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ItemDg",
        "Label": "ItemDg",
        "Description": "Dangerous Goods subtype of Item"
    },
    ":LiveAnimalsEpermit": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#LiveAnimalsEpermit",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LiveAnimalsEpermit",
        "Label": "LiveAnimalsEpermit",
        "Description": "Epermit for Live Animals details"
    },
    ":Loading": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Loading",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Loading",
        "Label": "Loading",
        "Description": "Action to describe onloading or offloading TransportMeans"
    },
    ":LoadingActivity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#LoadingActivity",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LoadingActivity",
        "Label": "LoadingActivity",
        "Description": "Activity to describe onloading and offloading processes"
    },
    ":LoadingMaterial": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#LoadingMaterial",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LoadingMaterial",
        "Label": "LoadingMaterial",
        "Description": "LoadingMaterial describes transportable, complementary non-Piece objects such as dry ice or nets"
    },
    ":LoadingUnit": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#LoadingUnit",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LoadingUnit",
        "Label": "LoadingUnit",
        "Description": "Common loading unit/container details"
    },
    ":Location": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Location",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "Location",
        "Description": "Loading location details"
    },
    ":LogisticsAction": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#LogisticsAction",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsAction",
        "Label": "LogisticsAction",
        "Description": "Superclass: LogisticsAction is a specific task with a specific result performed on one or more physical LOs by one party in the context of an Activity"
    },
    ":LogisticsActivity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#LogisticsActivity",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsActivity",
        "Label": "LogisticsActivity",
        "Description": "Superclass: LogisticsActivity is a scheduled set of tasks that is executed as part of one or more Services"
    },
    ":LogisticsAgent": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#LogisticsAgent",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsAgent",
        "Label": "LogisticsAgent",
        "Description": "Superclass: LogisticsAgents describe acting entities in the logistics supply chain such as persons and organizations"
    },
    ":LogisticsObject": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#LogisticsObject",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsObject",
        "Label": "LogisticsObject",
        "Description": "Logistics Object parent class, containing all common properties for logistics objects."
    },
    ":LogisticsService": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#LogisticsService",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsService",
        "Label": "LogisticsService",
        "Description": "Superclass: LogisticsService is a sequence of Activities provided by one Party to another"
    },
    ":Measurement": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Measurement",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Measurement",
        "Label": "Measurement",
        "Description": "Measurements details for Sensors, either generic or geolocation measurements are recorded"
    },
    ":MovementTime": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#MovementTime",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#MovementTime",
        "Label": "MovementTime",
        "Description": "Times refering to Transport Movements, used to describe specfic times such as Actual Departure time, etc."
    },
    ":Moving": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Moving",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Moving",
        "Label": "Moving",
        "Description": "Action to describe movements of TransportMeans"
    },
    ":NonHumanActor": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#NonHumanActor",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#NonHumanActor",
        "Label": "NonHumanActor",
        "Description": "Non-human actors are actors which are not a person, such as robots"
    },
    ":Organization": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Organization",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "Organization",
        "Description": "Superclass: Organizations represent a kind of Agent corresponding to social instititutions such as companies, societies, etc"
    },
    ":OtherIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#OtherIdentifier",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#OtherIdentifier",
        "Label": "OtherIdentifier",
        "Description": "Other identifiers"
    },
    ":PackagingType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#PackagingType",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#PackagingType",
        "Label": "PackagingType",
        "Description": "Packaging Details"
    },
    ":Party": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Party",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Party",
        "Label": "Party",
        "Description": "Refers to a Company and its role in a specific context, e.g Company A as shipper. Cargo-XML Code List 1.15 can be used as a reference with the addition of \"Notify Party\""
    },
    ":Person": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Person",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Person",
        "Label": "Person",
        "Description": "Person details"
    },
    ":PhysicalLogisticsObject": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#PhysicalLogisticsObject",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#PhysicalLogisticsObject",
        "Label": "PhysicalLogisticsObject",
        "Description": "Superclass: PhysicalLogisticObjects represent the digital twin of an object in the logistics suppy chain that physically exist"
    },
    ":Piece": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Piece",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "Piece",
        "Description": "Individual piece or virtual grouping of pieces"
    },
    ":PieceDg": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#PieceDg",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#PieceDg",
        "Label": "PieceDg",
        "Description": "Dangerous Goods subtype of Piece"
    },
    ":PieceLiveAnimals": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#PieceLiveAnimals",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#PieceLiveAnimals",
        "Label": "PieceLiveAnimals",
        "Description": "LiveAnimals subclass of Piece"
    },
    ":Price": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Price",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Price",
        "Label": "Price",
        "Description": "Price associated to the offer/booking"
    },
    ":Product": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Product",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Product",
        "Label": "Product",
        "Description": "Product details"
    },
    ":ProductDg": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ProductDg",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ProductDg",
        "Label": "ProductDg",
        "Description": "Dangerous Goods subtype of Product"
    },
    ":PublicAuthority": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#PublicAuthority",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#PublicAuthority",
        "Label": "PublicAuthority",
        "Description": "PublicAuthorities are Organizations of the state on public interests, such as customs"
    },
    ":Question": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Question",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Question",
        "Label": "Question",
        "Description": "Question holds one question and a link to an Answer The Question is provided by the party in charge of the template used"
    },
    ":Ranges": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Ranges",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Ranges",
        "Label": "Ranges",
        "Description": "Ranges details"
    },
    ":Ratings": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Ratings",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Ratings",
        "Label": "Ratings",
        "Description": "Ratings details"
    },
    ":RegulatedEntity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#RegulatedEntity",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#RegulatedEntity",
        "Label": "RegulatedEntity",
        "Description": "Regulated Entity"
    },
    ":Routing": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Routing",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Routing",
        "Label": "Routing",
        "Description": "Routing details"
    },
    ":ScheduledLegs": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ScheduledLegs",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ScheduledLegs",
        "Label": "ScheduledLegs",
        "Description": "Scheduled Legs class to be used to identify legs. Can be used with Booking Option Request as an indicator of preferred Routing or with Booking Option when a carrier proposes a specific Routing."
    },
    ":SecurityDeclaration": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#SecurityDeclaration",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#SecurityDeclaration",
        "Label": "SecurityDeclaration",
        "Description": "Security declaration details"
    },
    ":Sensor": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Sensor",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Sensor",
        "Label": "Sensor",
        "Description": "Sensor details and measurements, linked to Connected Devices"
    },
    ":SensorGeoloc": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#SensorGeoloc",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#SensorGeoloc",
        "Label": "SensorGeoloc",
        "Description": "Sensor measurements details for Geolocation sensors (sensorType = \"Geolocation\")"
    },
    ":SensorOther": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#SensorOther",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#SensorOther",
        "Label": "SensorOther",
        "Description": "Sensor measurements details for sensors other than Geolocation sensors (sensorType != \"Geolocation\")"
    },
    ":Shipment": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Shipment",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Shipment",
        "Label": "Shipment",
        "Description": "Shipment details"
    },
    ":Storage": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Storage",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Storage",
        "Label": "Storage",
        "Description": "Activity to describe storing processes"
    },
    ":Storing": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Storing",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Storing",
        "Label": "Storing",
        "Description": "Action to describe store-in or store-out"
    },
    ":TransportMeans": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#TransportMeans",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#TransportMeans",
        "Label": "TransportMeans",
        "Description": "Transport means details"
    },
    ":TransportMovement": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#TransportMovement",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#TransportMovement",
        "Label": "TransportMovement",
        "Description": "Activity to describe transports, replaces the TransportSegment in v1.1 and above"
    },
    ":Uld": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Uld",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ULD",
        "Label": "ULD",
        "Description": "Unit Load Device details"
    },
    ":UnitComposition": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#UnitComposition",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#UnitComposition",
        "Label": "UnitComposition",
        "Description": "Activity to describe build-up and break-down processes"
    },
    ":Value": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Value",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "Value",
        "Description": "Unit of measurement details"
    },
    ":VolumetricWeight": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#VolumetricWeight",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#VolumetricWeight",
        "Label": "VolumetricWeight",
        "Description": "Volumetric weight details"
    },
    ":Waybill": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#Waybill",
        "Type": "Class",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Waybill",
        "Label": "Waybill",
        "Description": "Waybill details"
    },
    ":actions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#actions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsAction",
        "Label": "actions",
        "Description": "References to all Actions performed for the TransportMovement"
    },
    ":activity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#activity",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsActivity",
        "Label": "activity",
        "Description": "Reference to the Activity that is performed as part of a Service"
    },
    ":activitySequences": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#activitySequences",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ActivitySequence",
        "Label": "activitySequences",
        "Description": "Information about the Activities that are part of the Service and their sequence"
    },
    ":address": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#address",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Address",
        "Label": "address",
        "Description": "Address details"
    },
    ":adjustments": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#adjustments",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Adjustments",
        "Label": "adjustments",
        "Description": "Information about Adjustments performed on the BillingDetails"
    },
    ":answer": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#answer",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Answer",
        "Label": "answer",
        "Description": "Reference to the Answer to the Question"
    },
    ":answerActor": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#answerActor",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Actor",
        "Label": "answerActor",
        "Description": "Reference to the Actor giving the Answer"
    },
    ":answerValue": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#answerValue",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "answerValue",
        "Description": "Information about an answer Value of any kind of the Answer"
    },
    ":appliedOnPieces": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#appliedOnPieces",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "appliedOnPieces",
        "Description": "Piece on which the Packaging type is applicable"
    },
    ":arrivalLocation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#arrivalLocation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "arrivalLocation",
        "Description": "Reference to the arrival Location"
    },
    ":associatedBranch": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#associatedBranch",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CompanyBranch",
        "Label": "associatedBranch",
        "Description": "Refers to the Branch the person is associated with"
    },
    ":associatedEpermit": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#associatedEpermit",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#EpermitConsignment",
        "Label": "associatedEpermit",
        "Description": "Reference to the permits associated with the Live Animals"
    },
    ":associatedOrganization": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#associatedOrganization",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "associatedOrganization",
        "Description": "Reference to the Organization the Actor is associated with"
    },
    ":attachedIotDevices": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#attachedIotDevices",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#IotDevice",
        "Label": "attachedIotDevices",
        "Description": "References to all connected IotDevices"
    },
    ":attachedToObject": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#attachedToObject",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#PhysicalLogisticsObject",
        "Label": "attachedToObject",
        "Description": "Reference to the PhysicalLogisticsObject the IotDevice is attached to"
    },
    ":basedAtLocation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#basedAtLocation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "basedAtLocation",
        "Description": "Reference to the Location where the Organization is based at or headquartered"
    },
    ":billingDetails": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#billingDetails",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BillingDetails",
        "Label": "billingDetails",
        "Description": "Reference to the BillingDetails of the Waybill"
    },
    ":booking": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#booking",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Booking",
        "Label": "booking",
        "Description": "Reference to the Booking"
    },
    ":bookingOption": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#bookingOption",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingOption",
        "Label": "bookingOption",
        "Description": "Reference to the BookingOptions"
    },
    ":bookingOptionRequest": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#bookingOptionRequest",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingOptionRequest",
        "Label": "bookingOptionRequest",
        "Description": "Reference to the BookingOptionRequest"
    },
    ":bookingSegment": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#bookingSegment",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingSegment",
        "Label": "bookingSegment",
        "Description": "Reference to the Booking Segment"
    },
    ":bookingShipmentDetails": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#bookingShipmentDetails",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingShipment",
        "Label": "bookingShipmentDetails",
        "Description": "Reference to the BookingShipment if required"
    },
    ":bookingTimes": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#bookingTimes",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingTimes",
        "Label": "bookingTimes",
        "Description": "booking times details of the Booking Option (proposed or actual)"
    },
    ":branch": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#branch",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CompanyBranch",
        "Label": "branch",
        "Description": "Company branches"
    },
    ":calculatedEmissions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#calculatedEmissions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "calculatedEmissions",
        "Description": "CO2 emissions calculated"
    },
    ":calculationForTransportMovement": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#calculationForTransportMovement",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#TransportMovement",
        "Label": "calculationForTransportMovement",
        "Description": "Reference to the TransportMovement the CO2Emissions have been calculated for"
    },
    ":carrier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#carrier",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "carrier",
        "Description": "Reference to the Organization that fulfills the role of the carrier in this Waybill"
    },
    ":carrierDeclarationPlace": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#carrierDeclarationPlace",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "carrierDeclarationPlace",
        "Description": "Location of individual or company involved in the movement of a consignment or Coded representation of a specific airport/city code"
    },
    ":carrierProductInfo": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#carrierProductInfo",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CarrierProduct",
        "Label": "carrierProductInfo",
        "Description": "Reference to the Carrier products included in the offer"
    },
    ":certifiedByActor": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#certifiedByActor",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Person",
        "Label": "certifiedByActor",
        "Description": "Reference to the Actor certifying the result of the Check if required"
    },
    ":chargeableWeight": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#chargeableWeight",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "chargeableWeight",
        "Description": "Chargeable weight"
    },
    ":checkActions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#checkActions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Check",
        "Label": "checkActions",
        "Description": "References to CheckActions performed for the Activity"
    },
    ":checkTemplate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#checkTemplate",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CheckTemplate",
        "Label": "checkTemplate",
        "Description": "Reference to the CheckTemplate the Question is from"
    },
    ":checkTotalResult": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#checkTotalResult",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CheckTotalResult",
        "Label": "checkTotalResult",
        "Description": "Reference to the result of the Check"
    },
    ":checkedObject": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#checkedObject",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsObject",
        "Label": "checkedObject",
        "Description": "Reference to the checked Object"
    },
    ":checker": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#checker",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Actor",
        "Label": "checker",
        "Description": "Reference to the Actor performing the Check"
    },
    ":checks": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#checks",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Check",
        "Label": "checks",
        "Description": "References to the CheckActions performed on the object"
    },
    ":co2Emissions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#co2Emissions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CO2Emissions",
        "Label": "co2Emissions",
        "Description": "References to CO2Emissions"
    },
    ":company": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#company",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Company",
        "Label": "company",
        "Description": "Refers to the mother company of the branch"
    },
    ":composedMaterials": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#composedMaterials",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LoadingMaterial",
        "Label": "composedMaterials",
        "Description": "References to the Materials being built-up or broken-down"
    },
    ":composedPieces": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#composedPieces",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "composedPieces",
        "Description": "References to the Pieces being built-up or broken-down"
    },
    ":compositionActions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#compositionActions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Composing",
        "Label": "compositionActions",
        "Description": "References to all CompositionActions performed for the UnitComposition"
    },
    ":connectedSensors": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#connectedSensors",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Sensor",
        "Label": "connectedSensors",
        "Description": "Reference to the sensors linked to the device"
    },
    ":consignee": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#consignee",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "consignee",
        "Description": "Reference to the Organization that fulfills the role of the consignee, for a LiveAnimalsEpermit it has to include complete name and address (box 3)"
    },
    ":consignmentItems": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#consignmentItems",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#PieceLiveAnimals",
        "Label": "consignmentItems",
        "Description": "Reference to te pieces (Live Animals) of the permit"
    },
    ":consignments": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#consignments",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#EpermitConsignment",
        "Label": "consignments",
        "Description": "Reference to the pieces and properties linked to the Permit (box 7 to 12)"
    },
    ":contactDetails": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#contactDetails",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ContactDetail",
        "Label": "contactDetails",
        "Description": "Information about contactDetails"
    },
    ":contactPersons": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#contactPersons",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Actor",
        "Label": "contactPersons",
        "Description": "References to Actors (Person, NonHumanActor) acting as contacts"
    },
    ":containedItemInPiece": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#containedItemInPiece",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "containedItemInPiece",
        "Description": "URI of the PIECE that contains the Item"
    },
    ":containedItems": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#containedItems",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Item",
        "Label": "containedItems",
        "Description": "Reference to the item(s) contained in the piece"
    },
    ":containedPieceInPiece": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#containedPieceInPiece",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "containedPieceInPiece",
        "Description": "Reference to the parent Piece if the Piece is contained within another Piece"
    },
    ":containedPieces": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#containedPieces",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "containedPieces",
        "Description": "Details of contained piece(s)"
    },
    ":contentDescribedByProducts": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#contentDescribedByProducts",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Product",
        "Label": "contentDescribedByProducts",
        "Description": "Product of the piece, mandatory when there are no items"
    },
    ":contentOfDgProductRadioactive": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#contentOfDgProductRadioactive",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#DgProductRadioactive",
        "Label": "contentOfDgProductRadioactive",
        "Description": "Reference to the DgProductRadioactive this Isotope is contained in"
    },
    ":contentProductionCountry": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#contentProductionCountry",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Country",
        "Label": "contentProductionCountry",
        "Description": "Goods production country, mandatory when there are no Items"
    },
    ":conversionFactor": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#conversionFactor",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "conversionFactor",
        "Description": "Volume to weight conversion factor"
    },
    ":country": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#country",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Country",
        "Label": "country",
        "Description": "Country details"
    },
    ":coveringOrganization": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#coveringOrganization",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "coveringOrganization",
        "Description": "Party covering the insurance "
    },
    ":createdAtLocation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#createdAtLocation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "createdAtLocation",
        "Description": "Location of the document, e.g. location where the document was emitted"
    },
    ":customsInformation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#customsInformation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CustomsInformation",
        "Label": "customsInformation",
        "Description": "Customs details"
    },
    ":deliveryLocation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#deliveryLocation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "deliveryLocation",
        "Description": "Name and UN/LOCODE code of the point or port of departure, shipment or destination, as required under the applicable delivery term"
    },
    ":departureLocation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#departureLocation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "departureLocation",
        "Description": "Reference to the depature Location"
    },
    ":describedByProduct": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#describedByProduct",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Product",
        "Label": "describedByProduct",
        "Description": "URI of the product"
    },
    ":descriptionForContentOfPieces": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#descriptionForContentOfPieces",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "descriptionForContentOfPieces",
        "Description": "Reference to the pieces where the product can be found. This needs to be filled in case there is no Item"
    },
    ":descriptionForItems": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#descriptionForItems",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Item",
        "Label": "descriptionForItems",
        "Description": "Reference to the Items in which the product can be found."
    },
    ":detailedWaybill": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#detailedWaybill",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Waybill",
        "Label": "detailedWaybill",
        "Description": "Reference to the Waybill"
    },
    ":dgDeclaration": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#dgDeclaration",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#DgDeclaration",
        "Label": "dgDeclaration",
        "Description": "Reference to the Dangerous Goods declaration"
    },
    ":dgRadioactiveMaterial": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#dgRadioactiveMaterial",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#DgProductRadioactive",
        "Label": "dgRadioactiveMaterial",
        "Description": "Dg Radioactive Material"
    },
    ":dimensions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#dimensions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Dimensions",
        "Label": "dimensions",
        "Description": "Dimensions details"
    },
    ":distanceCalculated": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#distanceCalculated",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "distanceCalculated",
        "Description": "Information about the calculated distance"
    },
    ":distanceMeasured": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#distanceMeasured",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "distanceMeasured",
        "Description": "Information about the measured distance"
    },
    ":documents": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#documents",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ExternalReference",
        "Label": "documents",
        "Description": "Linked documents to the person, e.g. driver's license, ID, etc."
    },
    ":elevation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#elevation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "elevation",
        "Description": "Elevation from sea level - Change of data type to Value as of ontology v1.1"
    },
    ":emergencyContact": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#emergencyContact",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Person",
        "Label": "emergencyContact",
        "Description": "Contains the Emergency contact name (e.g. the name of the agency) and phone number (min required)"
    },
    ":epermit": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#epermit",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LiveAnimalsEpermit",
        "Label": "epermit",
        "Description": "Reference to the Epermit of the consignment"
    },
    ":examiningQuantity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#examiningQuantity",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "examiningQuantity",
        "Description": "Quatity measured by the examining authority (box 14)"
    },
    ":excludedViaPoints": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#excludedViaPoints",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "excludedViaPoints",
        "Description": "Locations of excluded Via Points"
    },
    ":exportTradeCountry": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#exportTradeCountry",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Country",
        "Label": "exportTradeCountry",
        "Description": "Country of last re-export (box 12a)"
    },
    ":externalReferences": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#externalReferences",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ExternalReference",
        "Label": "externalReferences",
        "Description": "References to all associated ExternalReferences"
    },
    ":forActions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#forActions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Waybill",
        "Label": "forActions",
        "Description": "References to the Actions happening at the Location"
    },
    ":forBookingOptionRequest": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#forBookingOptionRequest",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingOptionRequest",
        "Label": "forBookingOptionRequest",
        "Description": "Reference to the BookingOptionRequest the information of the LogisticsObject is detailling"
    },
    ":forBookingOptions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#forBookingOptions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingOption",
        "Label": "forBookingOptions",
        "Description": "Reference to the BookingOptionRequest the LogisticsObject is detailling"
    },
    ":forBookingRequest": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#forBookingRequest",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingRequest",
        "Label": "forBookingRequest",
        "Description": "Reference to the BookingOptionRequest the LogisticsObject is detailling"
    },
    ":forEpermit": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#forEpermit",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LiveAnimalsEpermit",
        "Label": "forEpermit",
        "Description": "Reference to the LiveAnimalsEpermit this Signature applies to"
    },
    ":forPrices": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#forPrices",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Price",
        "Label": "forPrices",
        "Description": "Reference to the Prices based on this Ratings"
    },
    ":forProductDg": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#forProductDg",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ProductDg",
        "Label": "forProductDg",
        "Description": "Reference to the ProductDg this DgProductRadiosctive details"
    },
    ":freightForwarder": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#freightForwarder",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "freightForwarder",
        "Description": "Reference to the Organization that fulfills the role of the freight forwarder"
    },
    ":fromCarrier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#fromCarrier",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Carrier",
        "Label": "fromCarrier",
        "Description": "Carrier details"
    },
    ":fuelAmountCalculated": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#fuelAmountCalculated",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "fuelAmountCalculated",
        "Description": "Information about the calculated fuel amount"
    },
    ":fuelAmountMeasured": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#fuelAmountMeasured",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "fuelAmountMeasured",
        "Description": "Information about the measured fuel amount"
    },
    ":geolocation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#geolocation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Geolocation",
        "Label": "geolocation",
        "Description": "Geolocation details"
    },
    ":givenAtLocation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#givenAtLocation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "givenAtLocation",
        "Description": "Reference to the Location from which the Question was answered, relevant for split checks with documentary and physical elements"
    },
    ":grossWeight": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#grossWeight",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "grossWeight",
        "Description": "Weight details"
    },
    ":handlingInstructions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#handlingInstructions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#HandlingInstructions",
        "Label": "handlingInstructions",
        "Description": "Links to Handling instructions / service requests of the piece"
    },
    ":height": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#height",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "height",
        "Description": "Height"
    },
    ":houseWaybills": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#houseWaybills",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Waybill",
        "Label": "houseWaybills",
        "Description": "Refers to the Waybill(s) contained"
    },
    ":identifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#identifier",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Company",
        "Label": "identifier",
        "Description": "Regulated entity identifier (e.g. Regulated Agent Identifier) is mandatory"
    },
    ":insurance": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#insurance",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Insurance",
        "Label": "insurance",
        "Description": "Insurance details"
    },
    ":insuredAmount": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#insuredAmount",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "insuredAmount",
        "Description": "Insured amount - amount covered by the insurance policy"
    },
    ":insuredShipment": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#insuredShipment",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Shipment",
        "Label": "insuredShipment",
        "Description": "Reference to the shipment insured"
    },
    ":involvedInActions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#involvedInActions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsAction",
        "Label": "involvedInActions",
        "Description": "References to the Actions the object is involved in"
    },
    ":involvedParties": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#involvedParties",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Party",
        "Label": "involvedParties",
        "Description": "Information about other Parties involved depending on the context of use"
    },
    ":isotopes": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#isotopes",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#DgRadioactiveIsotope",
        "Label": "isotopes",
        "Description": "DgRadioactiveIsotope."
    },
    ":issuedBy": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#issuedBy",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Person",
        "Label": "issuedBy",
        "Description": "Name of person (or employee ID) who issued the security status"
    },
    ":issuedForPiece": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#issuedForPiece",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "issuedForPiece",
        "Description": "Reference to the Piece the document was issued for"
    },
    ":issuedForWaybill": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#issuedForWaybill",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Waybill",
        "Label": "issuedForWaybill",
        "Description": "Reference to the Waybill object"
    },
    ":itemQuantity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#itemQuantity",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "itemQuantity",
        "Description": "Quantity of the item when applicable, with associated units of measure"
    },
    ":legacyTemplate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#legacyTemplate",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ExternalReference",
        "Label": "legacyTemplate",
        "Description": "Reference to an ExternalReference holding a legacy templats outside of ONE Record, such as a photo or pdf of a checksheet"
    },
    ":length": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#length",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "length",
        "Description": "Length"
    },
    ":linkedLogisticObjects": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#linkedLogisticObjects",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ExternalReference",
        "Label": "linkedLogisticObjects",
        "Description": "References to the LogisticsObjects referring to this external reference"
    },
    ":linkedObject": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#linkedObject",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsObject",
        "Label": "linkedObject",
        "Description": "\"Refers to the URI of the linked object(s)"
    },
    ":loadedMaterials": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadedMaterials",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LoadingMaterial",
        "Label": "loadedMaterials",
        "Description": "References to Materials onloaded or offloaded"
    },
    ":loadedPieces": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadedPieces",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "loadedPieces",
        "Description": "References to Pieces onloaded or offloaded"
    },
    ":loadedPiecesOnLoadingUnit": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadedPiecesOnLoadingUnit",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "loadedPiecesOnLoadingUnit",
        "Description": "Details of contained (virtual) piece(s)"
    },
    ":loadedUnits": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadedUnits",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LoadingUnit",
        "Label": "loadedUnits",
        "Description": "References to LoadingUnits onloaded or offloaded"
    },
    ":loadingActions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadingActions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Loading",
        "Label": "loadingActions",
        "Description": "References to all LoadingActions performed for the Loading Activity"
    },
    ":loadingUnit": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadingUnit",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LoadingUnit",
        "Label": "loadingUnit",
        "Description": "Reference to the LoadingUnit being built-up or broken-down"
    },
    ":locationOfCreation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#locationOfCreation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "locationOfCreation",
        "Description": "Location of the document, e.g. location where the document was emitted"
    },
    ":locationOfPerformance": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#locationOfPerformance",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "locationOfPerformance",
        "Description": "Reference to the Location the Action was performed at"
    },
    ":manufacturer": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#manufacturer",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "manufacturer",
        "Description": "Manufacturing company details and contacts"
    },
    ":masterWaybill": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#masterWaybill",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Waybill",
        "Label": "masterWaybill",
        "Description": "Reference to the master Waybill if it is contained in one"
    },
    ":measurementValue": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#measurementValue",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "measurementValue",
        "Description": "Information about all non-Geolocation values of the measurement"
    },
    ":measurements": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#measurements",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Measurement",
        "Label": "measurements",
        "Description": "Reference to the Measurements recorded by the Sensor"
    },
    ":movementTimes": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#movementTimes",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#MovementTime",
        "Label": "movementTimes",
        "Description": "Information about times related to the movement (milestone list to be defined)"
    },
    ":netWeightMeasure": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#netWeightMeasure",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "netWeightMeasure",
        "Description": "The total net weight of dangerous goods transported of this line item. For air transport the value must be the volume or mass in each package."
    },
    ":ofProduct": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ofProduct",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Product",
        "Label": "ofProduct",
        "Description": "Reference to the product"
    },
    ":onTransportMeans": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#onTransportMeans",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#TransportMeans",
        "Label": "onTransportMeans",
        "Description": "Reference to the TransportMeans that is being onloaded or offloaded"
    },
    ":operatedTransportMovements": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#operatedTransportMovements",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#TransportMovement",
        "Label": "operatedTransportMovements",
        "Description": "Transport Movement on which the Transport Means is used"
    },
    ":operatingTransportMeans": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#operatingTransportMeans",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#TransportMeans",
        "Label": "operatingTransportMeans",
        "Description": "Reference to the TransportMeans operating the TransportMovement"
    },
    ":organization": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#organization",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "organization",
        "Description": "Reference to the Organization acting in the role of this Party"
    },
    ":originTradeCountry": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#originTradeCountry",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Country",
        "Label": "originTradeCountry",
        "Description": "country of origin (box 12)"
    },
    ":originator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#originator",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Company",
        "Label": "originator",
        "Description": "Document originator details and contacts"
    },
    ":otherCharacteristics": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#otherCharacteristics",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Characteristic",
        "Label": "otherCharacteristics",
        "Description": "Charateristics of the product"
    },
    ":otherIdentifiers": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#otherIdentifiers",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#OtherIdentifier",
        "Label": "otherIdentifiers",
        "Description": "Details about any other identifier, depending on the context of use"
    },
    ":otherRegulatedEntities": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#otherRegulatedEntities",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#RegulatedEntity",
        "Label": "otherRegulatedEntities",
        "Description": "Any other regulated entity that accepts custody of the cargo and accepts the security status originally issued"
    },
    ":owningOrganization": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#owningOrganization",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "owningOrganization",
        "Description": "Reference to the Organization for which the RegulatedEntity information is valid"
    },
    ":packagingType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#packagingType",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#PackagingType",
        "Label": "packagingType",
        "Description": "Packaging details "
    },
    ":parentOrganization": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#parentOrganization",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "parentOrganization",
        "Description": "Reference to the parent Organization"
    },
    ":partOfIotDevice": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#partOfIotDevice",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#IotDevice",
        "Label": "partOfIotDevice",
        "Description": "Reference to the IoT Device to which the sensor is linked"
    },
    ":partOfShipment": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#partOfShipment",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Shipment",
        "Label": "partOfShipment",
        "Description": "Shipment on which the piece is assigned to"
    },
    ":partyDetails": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#partyDetails",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Company",
        "Label": "partyDetails",
        "Description": "Reference to the Company"
    },
    ":payload": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#payload",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "payload",
        "Description": "Actual payload for the transport"
    },
    ":paylperformedAtLocationoad": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#performedAtLocation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "performedAtLocation",
        "Description": "Reference to the Location the Action was performed at"
    },
    ":preferenceOfRequests": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#preferenceOfRequests",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingOptionRequest",
        "Label": "preferenceOfRequests",
        "Description": "Reference to the BookingOptionRequests"
    },
    ":preferredHandling": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#preferredHandling",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#HandlingInstructions",
        "Label": "preferredHandling",
        "Description": "Information about preferred HandlingInstructions for the BookingShipment"
    },
    ":price": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#price",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Price",
        "Label": "price",
        "Description": "Price of the Booking (if different from the offer)"
    },
    ":productionCountry": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#productionCountry",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Country",
        "Label": "productionCountry",
        "Description": "Production country details"
    },
    ":question": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#question",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Question",
        "Label": "question",
        "Description": "Reference to the Question the Answer is for"
    },
    ":questions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#questions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Question",
        "Label": "questions",
        "Description": "References to all Questions that are part of this template"
    },
    ":ranges": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ranges",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Ranges",
        "Label": "ranges",
        "Description": "Reference to the ranges"
    },
    ":ratings": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ratings",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Ratings",
        "Label": "ratings",
        "Description": "Rating used for pricing"
    },
    ":ratingsPreference": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ratingsPreference",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Ratings",
        "Label": "ratingsPreference",
        "Description": "Ratings preferences of the request"
    },
    ":receivedFrom": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#receivedFrom",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#RegulatedEntity",
        "Label": "receivedFrom",
        "Description": "Regulated entity that tendered the consignment"
    },
    ":recordedAtLocation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#recordedAtLocation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Location",
        "Label": "recordedAtLocation",
        "Description": "Location of event"
    },
    ":recordedBy": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#recordedBy",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "recordedBy",
        "Description": "Organization recording the LogisticsEvent"
    },
    ":recordedByActor": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#recordedByActor",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Actor",
        "Label": "recordedByActor",
        "Description": "Reference to the Actor recording the LogisticsEvent"
    },
    ":recordedGeolocation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#recordedGeolocation",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Geolocation",
        "Label": "recordedGeolocation",
        "Description": "Reference to the Geolocation recorded of the measurement"
    },
    ":referredBookingOption": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#referredBookingOption",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Booking",
        "Label": "referredBookingOption",
        "Description": "Refers to the Booking"
    },
    ":regulatedEntityIssuer": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#regulatedEntityIssuer",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#RegulatedEntity",
        "Label": "regulatedEntityIssuer",
        "Description": "Regulated entity issuing the Security Declaration"
    },
    ":requestRef": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#requestRef",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingOptionRequest",
        "Label": "requestRef",
        "Description": "Reference to the Booking option request"
    },
    ":requestedByActor": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#requestedByActor",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Person",
        "Label": "requestedByActor",
        "Description": "Refers to the person that requests the handling/service"
    },
    ":resultOfCheck": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#resultOfCheck",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Check",
        "Label": "resultOfCheck",
        "Description": "Reference to the Check this object is the result of"
    },
    ":resultValue": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#resultValue",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "resultValue",
        "Description": "Information about a result Value of any kind of the Check"
    },
    ":routing": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#routing",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Routing",
        "Label": "routing",
        "Description": "Routing details of the offer, to be compared with routing preferences of the quote request"
    },
    ":routingPreference": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#routingPreference",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Routing",
        "Label": "routingPreference",
        "Description": "Routing details that are part of the request, these details will be used to determine if the offer is a perfect match"
    },
    ":scheduledLegs": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#scheduledLegs",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ScheduledLegs",
        "Label": "scheduledLegs",
        "Description": "Scheduled Legs class to be used to identify legs. Can be used with Booking Option Request as an indicator of preferred Routing or with Booking Option when a carrier proposes a specific Routing."
    },
    ":securityDeclaration": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#securityDeclaration",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#SecurityDeclaration",
        "Label": "securityDeclaration",
        "Description": "Security details of the piece"
    },
    ":servedActivity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#servedActivity",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsActivity",
        "Label": "servedActivity",
        "Description": "Reference to the Activity the Action was performed for"
    },
    ":servedServices": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#servedServices",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LogisticsService",
        "Label": "servedServices",
        "Description": "Reference to Services this Activity is executed for"
    },
    ":shipment": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#shipment",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Shipment",
        "Label": "shipment",
        "Description": "Reference to the Shipment"
    },
    ":shipmentDetails": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#shipmentDetails",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Shipment",
        "Label": "shipmentDetails",
        "Description": "Details of the shipment that is to be shipped"
    },
    ":shipmentOfPieces": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#shipmentOfPieces",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "shipmentOfPieces",
        "Description": "Details of contained piece(s)"
    },
    ":shipper": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#shipper",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "shipper",
        "Description": "Reference to the Organization that fulfills the role of the shipper"
    },
    ":signatoryCompany": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#signatoryCompany",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Company",
        "Label": "signatoryCompany",
        "Description": "Signatory company name"
    },
    ":signatures": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#signatures",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#EpermitSignature",
        "Label": "signatures",
        "Description": "List of all the signatures of the Epermit (applicant box 4, issuing authority box 6, issuer box 13 and examining authority box 14)"
    },
    ":storedObjects": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#storedObjects",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#PhysicalLogisticsObject",
        "Label": "storedObjects",
        "Description": "Reference to the Objects being stored in or stored out"
    },
    ":storingActions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#storingActions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Storing",
        "Label": "storingActions",
        "Description": "References to all StoringActions performed for the Storing Activity"
    },
    ":subOrganization": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#subOrganization",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "subOrganization",
        "Description": "References to all sub-Organizations"
    },
    ":tareWeight": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#tareWeight",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "tareWeight",
        "Description": "Tare weight of the empty ULD"
    },
    ":targetCountry": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#targetCountry",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Country",
        "Label": "targetCountry",
        "Description": "Item target country"
    },
    ":taxDueAgent": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#taxDueAgent",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "taxDueAgent",
        "Description": "Tax due Agent (VAT/GST on Commission). Total VAT/TAX amount payable by airline to agent"
    },
    ":taxDueAirline": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#taxDueAirline",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "taxDueAirline",
        "Description": "Tax due Airline (as per AWB, or VAT/GST as per invoice). Total VAT/TAX amount payable by agent to airline"
    },
    ":timePreferences": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#timePreferences",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#BookingTimes",
        "Label": "timePreferences",
        "Description": "Schedule preferences of the request"
    },
    ":totalDimensions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#totalDimensions",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Dimensions",
        "Label": "totalDimensions",
        "Description": "Dimensions of the whole shipment"
    },
    ":totalGrossWeight": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#totalGrossWeight",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "totalGrossWeight",
        "Description": "Total gross weight of the whole shipment"
    },
    ":totalVolumetricWeight": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#totalVolumetricWeight",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#VolumetricWeight",
        "Label": "totalVolumetricWeight",
        "Description": "Volumetric weight of the whole shipment"
    },
    ":transportMovement": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#transportMovement",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#TransportMovement",
        "Label": "transportMovement",
        "Description": "Transport segment linked to the offer, including the Departure and Arrival locations"
    },
    ":transportMovements": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#transportMovements",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#TransportMovement",
        "Label": "transportMovements",
        "Description": "Transport Movements on which the object is transported"
    },
    ":transportOrganization": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#transportOrganization",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Organization",
        "Label": "transportOrganization",
        "Description": "Company operating the transport means"
    },
    ":transportedPieces": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#transportedPieces",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Piece",
        "Label": "transportedPieces",
        "Description": "Pieces assigned to the transport segment"
    },
    ":transportedUlds": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#transportedUlds",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LoadingUnit",
        "Label": "transportedUlds",
        "Description": "ULDs assigned to the transport segment"
    },
    ":typicalCo2Coefficient": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#typicalCo2Coefficient",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "typicalCo2Coefficient",
        "Description": "Required for some CO2 calculations"
    },
    ":typicalFuelConsumption": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#typicalFuelConsumption",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "typicalFuelConsumption",
        "Description": "Typical fuel comsumption (e.g. 20 000L / 1 000nm)"
    },
    ":uldReference": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#uldReference",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#LoadingUnit",
        "Label": "uldReference",
        "Description": "ULD on which the (virtual) piece has been loaded into - URIs of the ULD"
    },
    ":unitPrice": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#unitPrice",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "unitPrice",
        "Description": "Product price per unit in the base"
    },
    ":unitsPreference": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#unitsPreference",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "unitsPreference",
        "Description": "Unit preferences of the request (e.g. kg or cm)"
    },
    ":usedInCheck": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#usedInCheck",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Check",
        "Label": "usedTemplausedInCheckte",
        "Description": "Reference to the Check the template was used in"
    },
    ":usedTemplate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#usedTemplate",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CheckTemplate",
        "Label": "usedTemplate",
        "Description": "Reference to the Template used in the Check"
    },
    ":volume": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#volume",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "volume",
        "Description": "Volume"
    },
    ":volumetricWeight": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#volumetricWeight",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#VolumetricWeight",
        "Label": "volumetricWeight",
        "Description": "Volumetric weight details"
    },
    ":waybill": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#waybill",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Waybill",
        "Label": "waybill",
        "Description": "Reference to the Waybill of the shipment"
    },
    ":weight": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#weight",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "weight",
        "Description": "Weight of the item"
    },
    ":width": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#width",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "width",
        "Description": "Width"
    },
    ":accountingInformation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#accountingInformation",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "accountingInformation",
        "Description": "Indicates the details of accounting information. Free text e.g. PAYMENT BY CERTIFIED CHEQUE etc."
    },
    ":acquisitionDateTime": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#acquisitionDateTime",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "acquisitionDateTime",
        "Description": "Defined in Resolution Conf. 13.6 and is required for pre-Convention specimens (box 12b)"
    },
    ":actionEndTime": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#actionEndTime",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "actionEndTime",
        "Description": "DateTime holding the end time of the Action; Type is indicated through ActionType property"
    },
    ":actionStartTime": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#actionStartTime",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "actionStartTime",
        "Description": "DateTime holding the start time of the Action; Type is indicated through ActionType property"
    },
    ":actionTimeType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#actionTimeType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "actionTimeType",
        "Description": "Enum stating the type of the Action"
    },
    ":activityLevelMeasure": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#activityLevelMeasure",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "activityLevelMeasure",
        "Description": "Numeric expression of the activity of a radioactive Item"
    },
    ":additionalHazardClassificationId": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#additionalHazardClassificationId",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "additionalHazardClassificationId",
        "Description": "Identifies the subsidiary hazard class / division identification containing a numeric field separated by a decimal. There may be 0, 1 or 2 subsidiary risk classes or divisions. If there is more than one, each should be separated by a comma. The subsidiary risk must be shown in parentheses. "
    },
    ":additionalSecurityInformation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#additionalSecurityInformation",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "additionalSecurityInformation",
        "Description": "Any additional information that may be required by an ICAO Member State"
    },
    ":addressCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#addressCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "addressCode",
        "Description": "Address identifier using special coding systems e.g. US CBP FIRMS code"
    },
    ":addressCodeType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#addressCodeType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "addressCodeType",
        "Description": "Type of address code e.g. US CBP FIRMS"
    },
    ":aircraftLimitationInformation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#aircraftLimitationInformation",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "aircraftLimitationInformation",
        "Description": "Contains the Special Handling Code related to the prescribed limitation. Hardcoded to PASSENGER AND CARGO AIRCRAFT or CARGO AIRCRAFT ONLY. This field is mandatory for air (Air) "
    },
    ":aircraftPossibilityCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#aircraftPossibilityCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "aircraftPossibilityCode",
        "Description": "Aircraft possibility code - Refers to CXML Code List 1.46 that contains values such as \"Pure freighter flight carrying Loose Load Cargo - BBF\""
    },
    ":airlineCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#airlineCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "airlineCode",
        "Description": "IATA two-character airline code"
    },
    ":allPackedInOneIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#allPackedInOneIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "allPackedInOneIndicator",
        "Description": "A statement identifying that the dangerous goods listed above are all contained in the same outer packaging. Takes the form All packed in one aaaa (description of packaging type) x nn (number of packages). Applies to air transport only. (Air) "
    },
    ":allotment": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#allotment",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "allotment",
        "Description": "Reference to the Allotment as per the contracts between forwarders and carriers"
    },
    ":amount": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#amount",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "amount",
        "Description": "Amount"
    },
    ":annualQuotaQuantity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#annualQuotaQuantity",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "annualQuotaQuantity",
        "Description": "total number of specimens exported in the current calendar year and the current annuela quota for the species concerned (box 11a)"
    },
    ":answerOptionsText": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#answerOptionsText",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "answerOptionsText",
        "Description": "Text restrictions to the Answer"
    },
    ":answerOptionsValue": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#answerOptionsValue",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "answerOptionsValue",
        "Description": "Value restrictions to the answer"
    },
    ":arrivalDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#arrivalDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "arrivalDate",
        "Description": "Arrival date and time of the leg"
    },
    ":associatedObject": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#associatedObject",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "associatedObject",
        "Description": "Reference of the Logistic Object to which the Connected Device is linked (URI)"
    },
    ":ataDesignator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ataDesignator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "ataDesignator",
        "Description": "US / ATA Unit Load Device type code e.g. M2"
    },
    ":authorizationInformation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#authorizationInformation",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "authorizationInformation",
        "Description": "Contains additional information relating to an approval, permission or other specific detail applicable to the commodity (e.g. Dangerous Goods in excepted quantities) "
    },
    ":awbAcceptanceDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#awbAcceptanceDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "awbAcceptanceDate",
        "Description": "The Date AWB Acceptance should be the same as the Date AWB Delivery. (beginning of the process)"
    },
    ":awbDeliveryDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#awbDeliveryDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "awbDeliveryDate",
        "Description": "The Date AWB Delivery is also used as the AWB Execution date which will determine which billing period it will be processed and billed in."
    },
    ":awbExecutionDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#awbExecutionDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "awbExecutionDate",
        "Description": "The AWB execution date determines which billing period the document will be processed and billed in."
    },
    ":awbUseIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#awbUseIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "awbUseIndicator",
        "Description": "It must either contain the values of R for Revenue AWB, V for Void AWB or S for Service AWB."
    },
    ":batchNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#batchNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "batchNumber",
        "Description": "Production batch number / reference"
    },
    ":billingChargeIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#billingChargeIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "subTotal",
        "Description": "Subtotal of the charge"
    },
    ":bookingOptionStatus": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#bookingOptionStatus",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "bookingOptionStatus",
        "Description": "Status of the Booking Option with regards to the step in the Sales and Booking process. Enumerated values to be defined"
    },
    ":branchName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#branchName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "branchName",
        "Description": "Company branch name"
    },
    ":carrierChargeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#carrierChargeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "carrierChargeCode",
        "Description": "Charge code for carrier, eg. CA, CB, etc"
    },
    ":carrierDeclarationDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#carrierDeclarationDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "carrierDeclarationDate",
        "Description": "Date upon which the certification is made by the carrier"
    },
    ":carrierDeclarationSignature": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#carrierDeclarationSignature",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "carrierDeclarationSignature",
        "Description": "Contains the authentication of the Carrier"
    },
    ":carrierName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#carrierName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "carrierName",
        "Description": "Official carrier name"
    },
    ":carrierShortName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#carrierShortName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "carrierShortName",
        "Description": "Carrier short name if any"
    },
    ":category": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#category",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "category",
        "Description": "Party type, should be one of the following RA - Regulated Agent, KC - Known Consignor, AO - Aircraft Operator, RC - Regulated Carrier"
    },
    ":categoryCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#categoryCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "categoryCode",
        "Description": "Operations code ID. Refers to the number of the registered captive-breeding or artifical propagation operation (box 12b)"
    },
    ":characteristicType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#characteristicType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "characteristicType",
        "Description": "Product characteristics code - e.g. CLR - Color. Not restricted to a list."
    },
    ":chargeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#chargeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "chargeCode",
        "Description": "Charge code, refer to CargoXML Code List 1.1"
    },
    ":chargeDescription": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#chargeDescription",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "chargeDescription",
        "Description": "Description of the charge e.g. Airfreight, fuel, etc."
    },
    ":chargePaymentType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#chargePaymentType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "chargePaymentType",
        "Description": "Indicates if charge is prepaid or collect (P, C)"
    },
    ":chargeType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#chargeType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "chargeType",
        "Description": "Type of charge that should match the code expressed in either chargeCode, otherChargeCode or billingChargeIndentifier data properties."
    },
    ":checkRemark": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#checkRemark",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "checkRemark",
        "Description": "Free text remarks to the check result"
    },
    ":checksum": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#checksum",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "checksum",
        "Description": "Checksum of the document to validate its integrity"
    },
    ":cityCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#cityCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "cityCode",
        "Description": "UN/LOCODE city code (5 letter) or IATA city code (3 letter)"
    },
    ":cityName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#cityName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "cityName",
        "Description": "If no CityCode provided, full name of the city "
    },
    ":code": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#code",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "code",
        "Description": "Location code of airport, freight terminal, seaport, rail station. UN/LOCODE city code (5 letter) or IATA airport code (3 letter)"
    },
    ":coload": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#coload",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "coload",
        "Description": "Coload indicator for the pieces (boolean)"
    },
    ":commission": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#commission",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "commission",
        "Description": "The commission amount in favour of the Cargo Agent/Associate, applicable for the shipment concerned"
    },
    ":commissionIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#commissionIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#strinbooleang",
        "Label": "commissionIndicator",
        "Description": "Indicates if commission is applied. Boolean"
    },
    ":commissionPercentage": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#commissionPercentage",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "commissionPercentage",
        "Description": "The commission percentage in favour of the Cargo Agent/Associate, applicable for the shipment concerned"
    },
    ":commodityItemNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#commodityItemNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "commodityItemNumber",
        "Description": "Indicates the specific commodity on which the rate class code is applied"
    },
    ":companyIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#companyIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "companyIdentifier",
        "Description": "Company identifier from the Internet of Logistics of the entity that hosts the object."
    },
    ":companyName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#companyName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "companyName",
        "Description": "Name of company or organization"
    },
    ":complianceDeclarationText": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#complianceDeclarationText",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "complianceDeclarationText",
        "Description": "Contains the warning message complying with the regulations text note. This field is mandatory for air (Air) "
    },
    ":compositionIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#compositionIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "compositionIdentifier",
        "Description": "Short text holding the process number if necessary"
    },
    ":compositionType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#compositionType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "compositionType",
        "Description": "Enum stating whether the CompositionAction describes build-up or break-down"
    },
    ":consignorDeclarationSignature": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#consignorDeclarationSignature",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "consignorDeclarationSignature",
        "Description": "Name of consignor signatory"
    },
    ":contactDetailType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#contactDetailType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "contactDetailType",
        "Description": "Type of the contact details, e.g. Phone number, Mail address"
    },
    ":contactRole": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#contactRole",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "contactRole",
        "Description": "Contact type - e.g. Emergency contact, Customs contact, Customer contact"
    },
    ":contentCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#contentCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "contentCode",
        "Description": "ustoms, Security and Regulatory Control Information Identifier. Coded indicator qualifying Customs related information: Item Number \\I\", Exemption Legend \"L\", System Downtime Reference \"S\", Unique Consignment Reference Number \"U\", Movement Reference Number \"M"
    },
    ":copyIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#copyIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "copyIndicator",
        "Description": "Indicates if the permit is a copy (true) or an original (false) (box 1)"
    },
    ":correctionNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#correctionNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "correctionNumber",
        "Description": "Number of the adjustment"
    },
    ":correctionSerialNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#correctionSerialNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "correctionSerialNumber",
        "Description": "Serial Number of the correction"
    },
    ":countryCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#countryCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "countryCode",
        "Description": "Country ISO code. Refer ISO 3166-2. At least one of the three elements (Country Code, Information Identifier or Customs, Security and Regulatory Control Information Identifier) must be completed"
    },
    ":countryName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#countryName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "countryName",
        "Description": "Full country name, Refer ISO 3166-2"
    },
    ":creationDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#creationDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "creationDate",
        "Description": "DateTime at which the LogisticsEvent was posted"
    },
    ":criticalitySafetyIndexNumeric": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#criticalitySafetyIndexNumeric",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "criticalitySafetyIndexNumeric",
        "Description": "Applies to fissile material only, other than fissile excepted. A numeric value expressed to one decimal place preceded by the letters CSI."
    },
    ":customsOriginCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#customsOriginCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "customsOriginCode",
        "Description": "Code indicating the origin of goods for Customs purposes (e.g. For goods in free circulation in the EU)"
    },
    ":damageFlag": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#damageFlag",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "damageFlag",
        "Description": "Indicates if the ULD is Damaged"
    },
    ":date": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#date",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "date",
        "Description": "DateTime on which the CheckTemplate was released"
    },
    ":declaredValueForCarriage": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#declaredValueForCarriage",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "declaredValueForCarriage",
        "Description": "The value of a shipment declared for carriage purposes , NVD if no value declared"
    },
    ":declaredValueForCustoms": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#declaredValueForCustoms",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "declaredValueForCustoms",
        "Description": "The value of a shipment declared for customs purposes , NVD if no value declared"
    },
    ":deliveryDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#deliveryDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "deliveryDate",
        "Description": "he date at which the delivery is supposed to happen. Format is YYYYMMDD."
    },
    ":demurrageCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#demurrageCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "demurrageCode",
        "Description": "Contains three designator of demurrage code, refer to RP 1654 (BCC, HHH, XXX, ZZZ)"
    },
    ":department": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#department",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "department",
        "Description": "Department / Division / Unit"
    },
    ":departureDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#departureDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "departureDate",
        "Description": "Departure date and time of the leg"
    },
    ":description": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#description",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "description",
        "Description": "Natural language description if required"
    },
    ":destinationCharges": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#destinationCharges",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "destinationCharges",
        "Description": "Charges levied at destination accruing to the last carrier, in destination currency"
    },
    ":destinationCurrencyCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#destinationCurrencyCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "destinationCurrencyCode",
        "Description": "ISO 3-letter currency code of destination. Refer to ISO 4217"
    },
    ":destinationCurrencyRate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#destinationCurrencyRate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "destinationCurrencyRate",
        "Description": "Conversion rate applied"
    },
    ":deviceModel": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#deviceModel",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "deviceModel",
        "Description": "Commercial denomination of the device"
    },
    ":dgRaTypeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#dgRaTypeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "dgRaTypeCode",
        "Description": "The category of the package or all packed in one. Complete text to be transmitted: I-White, II-Yellow, III-Yellow instead of I, II, III"
    },
    ":direction": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#direction",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "direction",
        "Description": "Direction to indicate if it's Inbound or Outbound"
    },
    ":discount": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#discount",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "discount",
        "Description": "This is used as a discount to the \u201cofficial\u201d transportation charge on AWB to arrive at actual selling price"
    },
    ":documentIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#documentIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "documentIdentifier",
        "Description": "Unique document identifier"
    },
    ":documentLink": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#documentLink",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "documentLink",
        "Description": "Link to the document, e.g. URL of the file where it is hosted"
    },
    ":documentName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#documentName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "documentName",
        "Description": "If no DocumentType provided, name of the referenced document "
    },
    ":documentType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#documentType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "documentType",
        "Description": "Type of the referenced document . Can refer UNEDIFACT 1001  e.g. 740 - Air Waybill, but not limited to"
    },
    ":documentVersion": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#documentVersion",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "documentVersion",
        "Description": "Document version number"
    },
    ":earliestAcceptanceTime": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#earliestAcceptanceTime",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "earliestAcceptanceTime",
        "Description": "Earliest acceptance date time (requested or proposed)"
    },
    ":employeeId": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#employeeId",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "employeeId",
        "Description": "Employee ID"
    },
    ":entitlement": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#entitlement",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "entitlement",
        "Description": "Entitlement code to define if charges are Due carrier (C) or Due agent (A). Refer to CXML Code List 1.3"
    },
    ":epermitNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#epermitNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "epermitNumber",
        "Description": "The original number is a unique number allocated to each document by the relevant Management Authority. (box 1)"
    },
    ":eventCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#eventCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "eventCode",
        "Description": "Movement or milestone code. Can refer to CXML Code List 1.18, e.g. DEP, ARR, FOH, RCS but not restricted to it."
    },
    ":eventDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#eventDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "eventDate",
        "Description": "Date and time of the event"
    },
    ":eventName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#eventName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "eventName",
        "Description": "If no EventCode provided, event name - e.g. Security clearance"
    },
    ":eventTimeType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#eventTimeType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "eventTimeType",
        "Description": "Indicates type of event e.g.  Scheduled, Estimated, Actual"
    },
    ":exchangeRate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#exchangeRate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "exchangeRate",
        "Description": "The Rate at which the Air Waybill Amount has been multiplied to arrive at the amount of settlement."
    },
    ":exclusiveUseIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#exclusiveUseIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "exclusiveUseIndicator",
        "Description": "Indicates an exclusive use shipment"
    },
    ":executionStatus": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#executionStatus",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "executionStatus",
        "Description": "Enum stating the status of the Activity"
    },
    ":expectedCommodities": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#expectedCommodities",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "expectedCommodities",
        "Description": "Expected commodity for quote request purposes only. To be defined by MCD"
    },
    ":expiryDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#expiryDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "expiryDate",
        "Description": "Product expiry date - e.g. for perishables goods or goods with programmed obsolescence"
    },
    ":explosiveCompatibilityGroupCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#explosiveCompatibilityGroupCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "explosiveCompatibilityGroupCode",
        "Description": "Specifies the reference to the group which identifies the kind of substances and articles that are deemed to be compatible. Mandatory field in case of transport of explosive articles or substances"
    },
    ":firstName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#firstName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "firstName",
        "Description": "First name / given name"
    },
    ":fissileExceptionIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#fissileExceptionIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "fissileExceptionIndicator",
        "Description": "Indicates if Fissile is excepted"
    },
    ":fissileExceptionReference": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#fissileExceptionReference",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "fissileExceptionReference",
        "Description": "Fissile exception reference, mandatory if Fissile Exception Indicator is true."
    },
    ":fuelType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#fuelType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "fuelType",
        "Description": "e.g. Kerosene, Diesel, SAF, Electricity [renewable], Electricity [non-renewable]"
    },
    ":fulfillsUldTypeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#fulfillsUldTypeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "fulfillsUldTypeCode",
        "Description": "Text holding an ULD Type Code if the Piece fulfills it before UnitComposition"
    },
    ":geolocationUnit": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#geolocationUnit",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "geolocationUnit",
        "Description": "re of the Geolocation coordinates, standard is Degree"
    },
    ":goodsDescription": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#goodsDescription",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "goodsDescription",
        "Description": "Description of goods, for the BookingShipment the commodity list defined by Modernizing Cargo Distribution MCD working group can be used as a referential."
    },
    ":goodsTypeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#goodsTypeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "goodsTypeCode",
        "Description": "Appendix number of the convention (I, II or III) (box 10)"
    },
    ":goodsTypeExtensionCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#goodsTypeExtensionCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "goodsTypeExtensionCode",
        "Description": "Appendix number of the convention (I, II or III) (box 10)"
    },
    ":grandTotal": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#grandTotal",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "grandTotal",
        "Description": "Total price"
    },
    ":groundsForExemption": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#groundsForExemption",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "groundsForExemption",
        "Description": "Exemption code - e.g. BIOM- Bio-Medical Samples \nSMUS - small undersized shipments MAIL - mail\nBIOM - bio-medical samples\nDIPL - diplomatic bags or diplomatic mail\nLFSM - life-saving materials NUCL - nuclear materials\nTRNS - transfer or transshipment"
    },
    ":handlingInformation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#handlingInformation",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "handlingInformation",
        "Description": "Free text. This may include items such as Control temperature for substances stabilized by temperature control, name and telephone number of a responsible person for infectious substances. "
    },
    ":handlingInstructionsType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#handlingInstructionsType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "handlingInstructionsType",
        "Description": "Refers to the type of handling information provided: Special Service Request (SSR), Special Handling Codes (SPH) or Other Service Information (OSI)"
    },
    ":handlingInstructionsTypeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#handlingInstructionsTypeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "handlingInstructionsTypeCode",
        "Description": "Service Type code linked top the Service Type.\nRefers to Code List 1.14 or 1.16 if service type is Special Handling."
    },
    ":hazardClassificationId": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#hazardClassificationId",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "hazardClassificationId",
        "Description": "Identifies the hazard class / division identification containing a numeric field separated by a decimal"
    },
    ":hsCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#hsCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "hsCode",
        "Description": "Harmonized Commodity code, refer to hsType used. 6 minimum digits are expected."
    },
    ":hsCommodityDescription": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#hsCommodityDescription",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "hsCommodityDescription",
        "Description": "Commodity description"
    },
    ":hsCommodityName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#hsCommodityName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "hsCommodityName",
        "Description": "If no Code provided, name of commodity"
    },
    ":hsType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#hsType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "hsType",
        "Description": "Reference identifying the type of standard code to be used for the Commodity Classification (Brussels Tariff Nomenclature, EU Harmonized System Code, UN Standard International Trade Classification). Mandatory if the commodity code is more than 6 digits"
    },
    ":iataCargoAgentCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#iataCargoAgentCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "iataCargoAgentCode",
        "Description": "IATA accredited cargo agent 7 digit number"
    },
    ":iataCargoAgentLocationIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#iataCargoAgentLocationIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "iataCargoAgentLocationIdentifier",
        "Description": "IATA CASS cargo agent 4 digit branch number / location identifier"
    },
    ":incoterms": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#incoterms",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "incoterms",
        "Description": "Standard codes as defined by UNCEFACT and ICC that correspond to international rules for the interpretation of the most commonly used trade terms in different countries. UNECE recommendation n. 5 Incoterms 2000."
    },
    ":isotopeId": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#isotopeId",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "isotopeId",
        "Description": "Id of each radionuclide or for mixtures of radionuclides."
    },
    ":isotopeName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#isotopeName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "isotopeName",
        "Description": "The name or symbol of each radionuclide or for mixtures of radionuclides, an appropriate general description, or a list of the most restrictive radionuclides. "
    },
    ":issuedOn": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#issuedOn",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "issuedOn",
        "Description": "Date and time when the security status was issued"
    },
    ":jobTitle": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#jobTitle",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "jobTitle",
        "Description": "Job title / position"
    },
    ":lastName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#lastName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "lastName",
        "Description": "Last name / family name / surname"
    },
    ":latestAcceptanceTime": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#latestAcceptanceTime",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "latestAcceptanceTime",
        "Description": "Latest Acceptance time as per CargoIQ definition (requested, proposed or actual)"
    },
    ":latestArrivalDateTime": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#latestArrivalDateTime",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "latestArrivalDateTime",
        "Description": "Latest Arrival date time (requested or proposed)"
    },
    ":latestArrivalTime": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#latestArrivalTime",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "latestArrivalTime",
        "Description": "Latest arrival time at destination"
    },
    ":latitude": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#latitude",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "latitude",
        "Description": "Location latitude - Change of data type to string as of version 1.2"
    },
    ":legSequenceNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#legSequenceNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "legSequenceNumber",
        "Description": "Sequence number of the leg"
    },
    ":loadType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "loadType",
        "Description": "Load type of the shipment or piece (Bulk, ULD, Pallet, Loose)"
    },
    ":loadingIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadingIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "loadingIdentifier",
        "Description": "Short text holding the process number if necessary"
    },
    ":loadingIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadingIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "loadingIndicator",
        "Description": "ULD height or loading limitation code. Refer CXML Code List 1.47,  e.g. R - ULD Height above 244 centimetres"
    },
    ":loadingPosition": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadingPosition",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "loadingPosition",
        "Description": "Position of the shipment in the aircraft - e.g. lower or main deck"
    },
    ":loadingPositionIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadingPositionIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "loadingPositionIdentifier",
        "Description": "Short text stating the loading position in the TransportMeans"
    },
    ":loadingType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#loadingType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "loadingType",
        "Description": "Enum stating whether the LoadingAction describes onloading or offloading"
    },
    ":locationName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#locationName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "locationName",
        "Description": "Full name of the location"
    },
    ":locationType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#locationType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "locationType",
        "Description": "Location type - e.g. Airport, Freight terminal, Rail station, Seaport, etc"
    },
    ":longText": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#longText",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "longText",
        "Description": "Long text of the question"
    },
    ":longitude": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#longitude",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "longitude",
        "Description": "Location longitude - Change of data type to string as of version 1.2"
    },
    ":lotNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#lotNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "lotNumber",
        "Description": "Production lot number / reference"
    },
    ":lowDispersibleIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#lowDispersibleIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "lowDispersibleIndicator",
        "Description": "A notation that the material is low dispersible radioactive material."
    },
    ":materialModel": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#materialModel",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "materialModel",
        "Description": "Model of the LoadingMaterial if any"
    },
    ":materialType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#materialType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "materialType",
        "Description": "Type of the LoadingMaterial"
    },
    ":maxConnections": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#maxConnections",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "maxConnections",
        "Description": "Maximum number of connections of the transport movement (requested or proposed)"
    },
    ":maximumQuantity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#maximumQuantity",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "maximumQuantity",
        "Description": "Maximum quantity"
    },
    ":measurementTimestamp": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#measurementTimestamp",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "measurementTimestamp",
        "Description": "Timestamp for the measurement"
    },
    ":methodName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#methodName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "methodName",
        "Description": "Name of the CO2 calculation method"
    },
    ":methodVersion": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#methodVersion",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "methodVersion",
        "Description": "Version used for the calculation"
    },
    ":middleName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#middleName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "middleName",
        "Description": "Middle name/ other name"
    },
    ":minimumQuantity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#minimumQuantity",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "minimumQuantity",
        "Description": "Minimum quantity"
    },
    ":modeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#modeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "modeCode",
        "Description": "Mode of transport code, refer to UNECE Rec. 19 https://unece.org/fileadmin/DAM/cefact/recommendations/rec19/rec19_01cf19e.pdf"
    },
    ":modeQualifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#modeQualifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "modeQualifier",
        "Description": "Pre-Carriage, Main-Carriage or On-Carriage"
    },
    ":modularCheckNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#modularCheckNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "modularCheckNumber",
        "Description": "The check is a Modular 7 validation on the AWB number, recorded as a boolean."
    },
    ":movementMilestone": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#movementMilestone",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "movementMilestone",
        "Description": "The milestone list still needs to be defined, it includes elements from CXML Code List 1.92 but is not limited to those values, e.g. block-on and block-off times might be added as a comparison to wheels off and touchdown."
    },
    ":movementTimeType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#movementTimeType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "movementTimeType",
        "Description": "The type of time can be Actual, Estimated ot Scheduled"
    },
    ":movementTimestamp": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#movementTimestamp",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "movementTimestamp",
        "Description": "Timestamp (date and time) of the movement time. If the movement time is recorded asynchronously, the timestamp should reflect the actual time, not when the data was created."
    },
    ":movementType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#movementType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "movementType",
        "Description": "Enum stating whether the MovementAction desribes arrival, depature or an unplanned stop"
    },
    ":name": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#name",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "name",
        "Description": "Human-understandable name of object depending on the context"
    },
    ":nbCorrections": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#nbCorrections",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "nbCorrections",
        "Description": "Number of corrections to CASS records"
    },
    ":note": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#note",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "note",
        "Description": "Free text for customs remarks, not used in OCI Composition Rules Table"
    },
    ":numberOfDoors": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#numberOfDoors",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "numberOfDoors",
        "Description": "Number of doors"
    },
    ":numberOfFittings": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#numberOfFittings",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "numberOfFittings",
        "Description": "Number of fittings"
    },
    ":numberOfNets": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#numberOfNets",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "numberOfNets",
        "Description": "Number of nets"
    },
    ":numberOfStraps": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#numberOfStraps",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "numberOfStraps",
        "Description": "Number of straps"
    },
    ":numericalValue": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#numericalValue",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "numericalValue",
        "Description": "Value"
    },
    ":nvdForCarriage": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#nvdForCarriage",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "nvdForCarriage",
        "Description": "When no value is declared for Carriage, this field may be completed with the value TRUE otherwise FALSE"
    },
    ":nvdForCustoms": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#nvdForCustoms",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "nvdForCustoms",
        "Description": "When no value is declared for Customs, this field may be completed with the value TRUE otherwise FALSE"
    },
    ":nvdIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#nvdIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "nvdIndicator",
        "Description": "When no value is declared for Insurance this field should be completed with the value TRUE otherwise FALSE"
    },
    ":odlnCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#odlnCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "odlnCode",
        "Description": "Contains two designator codes of ODLN or Operational Damage Limit Notices. ODLN code is used to define type of damage after visually check the serviceability of ULDs section 7, Standard Specifications 40/3 or 40/4 in ULD Regulations"
    },
    ":onlineInd": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#onlineInd",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "onlineInd",
        "Description": "Indicates interlining (requested or proposed)"
    },
    ":originCurrency": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#originCurrency",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "originCurrency",
        "Description": "ISO alpha 3 Code used to indicate the Origin Currency, refer to ISO 4217 currency codes"
    },
    ":originReferencePermitDateTime": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#originReferencePermitDateTime",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "originReferencePermitDateTime",
        "Description": "Issuing date for Origin reference permit or re-export reference Certificate (box 12)"
    },
    ":originReferencePermitId": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#originReferencePermitId",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "originReferencePermitId",
        "Description": "identifier of Origin reference permit or re-export reference Certificate (box 12/12a)"
    },
    ":originReferencePermitTypeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#originReferencePermitTypeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "originReferencePermitTypeCode",
        "Description": "Document type code of origin reference permit or re-export reference Certificate (box 12/12a)"
    },
    ":otherChargeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#otherChargeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "otherChargeCode",
        "Description": "Refer to CargoXML Code List 1.2 for Other Charges"
    },
    ":otherChargesIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#otherChargesIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "otherChargesIndicator",
        "Description": "payment of Other Charges will be made at origin (prepaid) or at destination (collect)"
    },
    ":otherCustomsInformation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#otherCustomsInformation",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "otherCustomsInformation",
        "Description": "Supplementary Customs, Security and Regulatory Control Information"
    },
    ":otherIdentifierType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#otherIdentifierType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "otherIdentifierType",
        "Description": "Identifier type or description"
    },
    ":otherScreeningMethods": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#otherScreeningMethods",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "otherScreeningMethods",
        "Description": "Other methods used to secure the cargo"
    },
    ":overpackCriticalitySafetyIndexNumeric": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#overpackCriticalitySafetyIndexNumeric",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "overpackCriticalitySafetyIndexNumeric",
        "Description": "Applies to fissile material only, other than fissile excepted. A numeric value expressed to one decimal place preceded by the letters CSI. "
    },
    ":overpackIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#overpackIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "overpackIndicator",
        "Description": "Overpack indicator "
    },
    ":overpackT1": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#overpackT1",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "overpackT1",
        "Description": "A single number assigned to a package, overpack or freight container to provide control over radiation exposure. "
    },
    ":overpackTypeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#overpackTypeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "overpackTypeCode",
        "Description": "Identifies the Logistic Unit package type. UN Recommendation on Transport of Dangerous Goods, Model Regulations "
    },
    ":ownerCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ownerCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "ownerCode",
        "Description": "Owner code of the ULD in aa, an or na format - owner can be an airline or leasing company"
    },
    ":packageMarkCoded": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#packageMarkCoded",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "packageMarkCoded",
        "Description": "Reference identifying how the package is marked. Field is hardcode to \"SSCC-18\", \"UPC\" or \"Other\""
    },
    ":packagedeIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#packagedeIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "packagedeIdentifier",
        "Description": "SSCC-18 code for the value of the package mark, company or bar code, free text, pallet code, etc."
    },
    ":packagingDangerLevelCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#packagingDangerLevelCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "packagingDangerLevelCode",
        "Description": "Packing group, If used must reference I, II or III"
    },
    ":packingInstructionNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#packingInstructionNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "packingInstructionNumber",
        "Description": "The packing instruction number applicable to the UN number / proper shipping name entry. A three-numeric value which may be preceded by the letter Y.  Mandatory field for air transport (Air) "
    },
    ":passed": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#passed",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "passed",
        "Description": "Boolean indicating whether the Check was passed"
    },
    ":permitTypeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#permitTypeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "permitTypeCode",
        "Description": "Code specifying the document name. (box 1)"
    },
    ":permitTypeOtherDescription": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#permitTypeOtherDescription",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "permitTypeOtherDescription",
        "Description": "Description if TypeCode is Other (box 1)"
    },
    ":physicalChemicalForm": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#physicalChemicalForm",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "physicalChemicalForm",
        "Description": "A description of the physical and chemical form of the material."
    },
    ":postOfficeBox": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#postOfficeBox",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "postOfficeBox",
        "Description": "Post Office box number / code"
    },
    ":postalCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#postalCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "postalCode",
        "Description": "Postal / ZIP code"
    },
    ":preferredTransportId": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#preferredTransportId",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "preferredTransportId",
        "Description": "When part of the Request it refers to the preferred Transport ID from the customer. When part of the BookingOption (offer or actual booking) it refers to the expected Transport ID or flight"
    },
    ":prefix": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#prefix",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "prefix",
        "Description": "IATA three-numeric airline prefix number"
    },
    ":priceSpecification": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#priceSpecification",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "priceSpecification",
        "Description": "Specification of the price e.g. Street, Group, Spot, etc."
    },
    ":priceSpecificationRef": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#priceSpecificationRef",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "priceSpecificationRef",
        "Description": "Reference of price specifications"
    },
    ":productCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#productCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "productCode",
        "Description": "Carrier's product code"
    },
    ":productDescription": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#productDescription",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "productDescription",
        "Description": "Carrier's product description"
    },
    ":productionDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#productionDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "productionDate",
        "Description": "Production date"
    },
    ":properShippingName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#properShippingName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "properShippingName",
        "Description": "The name used to describe the particular article or substance as shown in the UN Model Regulations Dangerous Goods List"
    },
    ":proposedWaybillNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#proposedWaybillNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "proposedWaybillNumber",
        "Description": "String containing the proposed waybill number for the BookingOption"
    },
    ":qValueNumeric": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#qValueNumeric",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "qValueNumeric",
        "Description": "Most instances of all packed in one will require the addition of the Q value which  1. Applies to air transport only. (Air)  "
    },
    ":quantityAnimals": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#quantityAnimals",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "quantityAnimals",
        "Description": "Quantity including units (box 11)"
    },
    ":quantityForUnitPrice": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#quantityForUnitPrice",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "quantityForUnitPrice",
        "Description": "Product quantity for unit price - e.g. 12 (eggs for one USD 1)"
    },
    ":questionsNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#questionsNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "questionsNumber",
        "Description": "Number of the Question within the template (alphanumeric)"
    },
    ":questionsSection": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#questionsSection",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "questionsSection",
        "Description": "Section of the CheckTemplate this Question is part of"
    },
    ":rateClassCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#rateClassCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "rateClassCode",
        "Description": "Rate class code e.g. Q. Refer to CXML Code List 1.4 Rate Class Codes"
    },
    ":rateQuantity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#rateQuantity",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "rateQuantity",
        "Description": "Used if there is an applicable quantity to the rate (Usually a Time or a Number)"
    },
    ":ratingType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ratingType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "ratingType",
        "Description": "rating type - Refer to CXML Code List 1.44 ULD Charge Codes"
    },
    ":ratingsType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ratingsType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "ratingsType",
        "Description": "Used to identify if the Ratings are Face, Published or Actual ratings. Expected values are F, A, C."
    },
    ":rcp": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#rcp",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "rcp",
        "Description": "IATA 3-letter code of the rate combination point"
    },
    ":reasonsForAdjustments": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#reasonsForAdjustments",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "reasonsForAdjustments",
        "Description": "A free text for user to include a reason for correction"
    },
    ":regionCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#regionCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "regionCode",
        "Description": "Region/ State / Department. Refer ISO 3166-2"
    },
    ":regionName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#regionName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "regionName",
        "Description": "If no StateCode provided, full name of the region / state / province / canton"
    },
    ":regulatedEntityExpiryDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#regulatedEntityExpiryDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#date",
        "Label": "regulatedEntityExpiryDate",
        "Description": "Expiry date 4 digits month/year"
    },
    ":remarks": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#remarks",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "remarks",
        "Description": "Remarks or Supplement Information"
    },
    ":reportableQuantity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#reportableQuantity",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "reportableQuantity",
        "Description": "Reportable quantities, To and from the USA only"
    },
    ":requestMatchInd": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#requestMatchInd",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "requestMatchInd",
        "Description": "Indicates if the offer is a perfect match to the quote request (boolean)"
    },
    ":requestedHandling": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#requestedHandling",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "requestedHandling",
        "Description": "Requested handling information for quote request purposes only"
    },
    ":rfsInd": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#rfsInd",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "rfsInd",
        "Description": "Indicates if RFS (Road Feeder Services) is included (requested or proposed)"
    },
    ":role": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#role",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "role",
        "Description": "Role fo the Company in the context. Can refer to Code List 1.36 in the CXML Toolkit"
    },
    ":salutation": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#salutation",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "salutation",
        "Description": "Salutation "
    },
    ":scr": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#scr",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "scr",
        "Description": "Specific commodity rates linked to commodity"
    },
    ":screeningMethods": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#screeningMethods",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "screeningMethods",
        "Description": "Screening methods which have been used to secure the cargo\nPHS \u2013 Physical Inspection and/or hand search \nVCK - Visual check \nXRY- X-ray equipment \nEDS - Explosive detection system \nEDD - Explosive detection dogs\nETD - Explosive trace detection equipment - particles or vapor \nCMD - Cargo metal detection\nAOM - Subjected to any other means: this entry should be followed by free text specifying what other mean was used to secure the cargo"
    },
    ":seal": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#seal",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "seal",
        "Description": "Seal identifier"
    },
    ":sealNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#sealNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "sealNumber",
        "Description": "ULD seal number if applicable"
    },
    ":securityStampId": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#securityStampId",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "securityStampId",
        "Description": "Security Stamp ID"
    },
    ":securityStatus": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#securityStatus",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "securityStatus",
        "Description": "Security status indicator (CXML 1.103) - e.g. SPX- Cargo Secure for Passenger and All-Cargo Aircraft "
    },
    ":sensorType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#sensorType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "sensorType",
        "Description": "Type of sensor as described in Interactive Cargo Recommended Practice"
    },
    ":sequenceNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#sequenceNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "sequenceNumber",
        "Description": "Short text to detail sequence number (alphanumeric)"
    },
    ":serialNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#serialNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "serialNumber",
        "Description": "Serial number that allows to uniquely identify the object"
    },
    ":serviceabilityCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#serviceabilityCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "serviceabilityCode",
        "Description": "Designator of serviceablity condition e.g. SER or DAM "
    },
    ":shipmentSecurityStatus": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#shipmentSecurityStatus",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "shipmentSecurityStatus",
        "Description": "Indicate the secruty state of the shipment, screened or not"
    },
    ":shipperDeclarationText": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#shipperDeclarationText",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "shipperDeclarationText",
        "Description": "Contains the shipper's declaration to comply with the regulations text note. Free text . This field is mandatory for air (Air)"
    },
    ":shippingInfo": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#shippingInfo",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "shippingInfo",
        "Description": "The shipper or its Agent may enter the appropriate optional shipping"
    },
    ":shippingMarks": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#shippingMarks",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "shippingMarks",
        "Description": "Shipping marks"
    },
    ":shippingRefNo": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#shippingRefNo",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "shippingRefNo",
        "Description": "Optional shipping reference number if any"
    },
    ":shortName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#shortName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "shortName",
        "Description": "Short name of the Organization if any"
    },
    ":shortText": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#shortText",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "shortText",
        "Description": "Short text of the Question"
    },
    ":signatoryRole": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#signatoryRole",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "signatoryRole",
        "Description": "Role of the signatory with regards to the ePermit: Applicant, Permit issuer, Issuing Authority or Examining authority"
    },
    ":signatureDate": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#signatureDate",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "signatureDate",
        "Description": "Date and time of the signature"
    },
    ":signatureStatement": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#signatureStatement",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "signatureStatement",
        "Description": "Signatory signature authentication text"
    },
    ":signatureTypeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#signatureTypeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "signatureTypeCode",
        "Description": "Code specifying a type of government action such as inspection, detention, fumigation, security."
    },
    ":skeletonIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#skeletonIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "skeletonIndicator",
        "Description": "Indicator whether a logistics object is a skeleton object"
    },
    ":slac": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#slac",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "slac",
        "Description": "Shipper's Load And Count  ( total contained piece count as provided by shipper)"
    },
    ":specialConditions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#specialConditions",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "specialConditions",
        "Description": "Special conditions (box 5)"
    },
    ":specialFormIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#specialFormIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "specialFormIndicator",
        "Description": "A notation that the material is special form"
    },
    ":specialProvisionId": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#specialProvisionId",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "specialProvisionId",
        "Description": "For Air Mode: Special Provision may show a single, double or triple digit number preceded by the letter A, against appropriate entries in the List of Dangerous Goods"
    },
    ":speciesCommonName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#speciesCommonName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "speciesCommonName",
        "Description": "Species common name (box 8)"
    },
    ":speciesScientificName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#speciesScientificName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "speciesScientificName",
        "Description": "Species scientific name (box 7)"
    },
    ":specimenDescription": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#specimenDescription",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "specimenDescription",
        "Description": "Description of specimens, including age and sex if LA (box 9)"
    },
    ":specimenTypeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#specimenTypeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "specimenTypeCode",
        "Description": "Description of specimens, CITES type code (box 9)"
    },
    ":stackable": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#stackable",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "stackable",
        "Description": "Stackable indicator for the pieces (boolean)"
    },
    ":storagePlaceIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#storagePlaceIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "storagePlaceIdentifier",
        "Description": "Short text stating the exact place of storage"
    },
    ":storingIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#storingIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "storingIdentifier",
        "Description": "Short text holding the process number if necessary"
    },
    ":storingType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#storingType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "storingType",
        "Description": "Enum stating whether the StoringAction describes the store-in or the store-out"
    },
    ":streetAddressLines": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#streetAddressLines",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "streetAddressLines",
        "Description": "Street address including street name, street number, building number, apartment etc"
    },
    ":subTotal": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#subTotal",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "subTotal",
        "Description": "Subtotal of the charge"
    },
    ":subjectCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#subjectCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "subjectCode",
        "Description": "Information Identifier. Code identifying a piece of information/entity e.g. \"IMP\" for import, \"EXP\" for export, \"AGT\" for Agent, \"ISS\" for The Regulated Agent Issuing the Security Status for a Consignment etc. \nCondition: At least one of the three elements (Country Code, Information Identifier or Customs, Security and Regulatory Control Information Identifier) must be completed"
    },
    ":supplementaryInfoPrefix": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#supplementaryInfoPrefix",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "supplementaryInfoPrefix",
        "Description": "Additional information that may be added in addition to the proper shipping name to more fully describe the goods or to identify a particular condition"
    },
    ":supplementaryInfoSuffix": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#supplementaryInfoSuffix",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "supplementaryInfoSuffix",
        "Description": "Additional information that may be added in addition to the proper shipping to more fully describe the goods or to identify a particular condition"
    },
    ":technicalName": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#technicalName",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "technicalName",
        "Description": "This is additional chemical name(s) required for some proper shipping names. When added the technical must be shown in parentheses immediately following the proper shipping name. "
    },
    ":templatePurpose": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#templatePurpose",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "templatePurpose",
        "Description": "Purpose of the template"
    },
    ":text": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#text",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "text",
        "Description": "Text for the Answer"
    },
    ":textualValue": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#textualValue",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "textualValue",
        "Description": "Textual value filled on use context (eg. characteristic colour, contactDetail mail adress, etc.)"
    },
    ":timeOfAvailability": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#timeOfAvailability",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "timeOfAvailability",
        "Description": "Time of availability of the shipment as per CargoIQ definition"
    },
    ":totalPieceCount": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#totalPieceCount",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "totalPieceCount",
        "Description": "Total Piece Count"
    },
    ":totalSLAC": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#totalSLAC",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "totalSLAC",
        "Description": "Total SLAC of all piece groups "
    },
    ":totalTransitTime": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#totalTransitTime",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#duration",
        "Label": "totalTransitTime",
        "Description": "Total transit time as per CargoIQ definition, expressed as a duration"
    },
    ":transactionPurpose": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#transactionPurpose",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "transactionPurpose",
        "Description": "Purpose of the transaction in free text (box 5a)"
    },
    ":transactionPurposeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#transactionPurposeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "transactionPurposeCode",
        "Description": "Code indicating the purpose of the transaction (box 5a)"
    },
    ":transportContractId": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#transportContractId",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "transportContractId",
        "Description": "Reference to the Air Waybill or other transport contract document (box 15)"
    },
    ":transportContractTypeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#transportContractTypeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "transportContractTypeCode",
        "Description": "Code specifying the transport document name (box 15)"
    },
    ":transportIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#transportIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "transportIdentifier",
        "Description": "Airline flight number, or rail/truck/maritime line id"
    },
    ":transportIndexNumeric": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#transportIndexNumeric",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "transportIndexNumeric",
        "Description": "Radioactive Transport-Index value of the package or all packed in one. Conditionally mandator and applies to categories II-Yellow and III-Yellow only; field only contains the value, if printed, TI must be added as a prefix to the value  to be printed in the Packing Instructions column"
    },
    ":turnable": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#turnable",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "turnable",
        "Description": "Turnable indicator for the pieces (boolean)"
    },
    ":typeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#typeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "typeCode",
        "Description": "Packaging type identifier as per UNECE Rec 21 Annex V and VI e.g. 1A - Drum, steel - Packaging material code. Identifies the Logistic Unit package type. UN Recommendation on Transport of Dangerous Goods, Model Regulations "
    },
    ":uldSerialNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#uldSerialNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "uldSerialNumber",
        "Description": "Serial number that allows to uniquely identify the ULD"
    },
    ":uldTypeCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#uldTypeCode",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "uldTypeCode",
        "Description": "Standard Unit Load Device type code e.g. AKE - Certified Container - Contoured. Refer to IATA ULD Technical Manual"
    },
    ":unNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#unNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "unNumber",
        "Description": "Reference identifying the United Nations Dangerous Goods serial number assigned within the UN to substances and articles contained in a list of the dangerous goods most commonly carried. e.g. 1189 - Ethylene glycol monomethyl ether acetate"
    },
    ":uniqueIdentifier": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#uniqueIdentifier",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "uniqueIdentifier",
        "Description": "Manufacturer's unique product identifier"
    },
    ":unit": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#unit",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "unit",
        "Description": "Unit of measurement/ unit of account e.g. CMT - Centimetre,  LTR - Litre (1 DM3), KGM - Kilogram, CHF - Swiss Franc"
    },
    ":unitBasis": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#unitBasis",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "unitBasis",
        "Description": "Specific commodity code linked to commodity"
    },
    ":upid": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#upid",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "upid",
        "Description": "Unique Piece Identifier (UPID) of the piece. Refer IATA Recommended Practice 1689"
    },
    ":usedToDateQuotaQuantity": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#usedToDateQuotaQuantity",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "usedToDateQuotaQuantity",
        "Description": "total number of specimens exported in the current calendar year and the current annuela quota for the species concerned (box 11a)"
    },
    ":validFrom": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#validFrom",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "validFrom",
        "Description": "Validity start date based on usage context"
    },
    ":validUntil": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#validUntil",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#dateTime",
        "Label": "validUntil",
        "Description": "Validity end date (date of expiry) based on usage context"
    },
    ":vatIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#vatIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#boolean",
        "Label": "vatIndicator",
        "Description": "Indicate if subject to VAT (boolean)"
    },
    ":vehicleModel": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#vehicleModel",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "vehicleModel",
        "Description": "Model or make of the vehicle (e.g. A330-300)"
    },
    ":vehicleRegistration": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#vehicleRegistration",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "vehicleRegistration",
        "Description": "Vehicle identification - e.g. aircraft registration number"
    },
    ":vehicleSize": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#vehicleSize",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "vehicleSize",
        "Description": "Size of the vehicle - free text"
    },
    ":vehicleType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#vehicleType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "vehicleType",
        "Description": "Vehicle or container type. Refer UNECE28, e.g. 4.00.0 - Aircraft, type unknown.For Air refer to IATA Standard Schedules Information Manua in section ATA/IATA Aircraft Types"
    },
    ":version": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#version",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "version",
        "Description": "Version of the template"
    },
    ":waybillNumber": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#waybillNumber",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "waybillNumber",
        "Description": "House or Master Waybill unique identifier"
    },
    ":waybillPrefix": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#waybillPrefix",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "waybillPrefix",
        "Description": "Prefix used for the Waybill Number. Refer to IATA Airlines Codes"
    },
    ":waybillType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#waybillType",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "waybillType",
        "Description": "Type of the Waybill: House, Direct or Master"
    },
    ":weightValuationIndicator": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#weightValuationIndicator",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#string",
        "Label": "weightValuationIndicator",
        "Description": "payment for the Weight/Valuation will be made at origin (prepaid) or at destination (collect)"
    },
    ":temperatureInstructions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#temperatureInstructions",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#TemperatureInstructions",
        "Label": "TemperatureInstructions",
        "Description": "TemperatureInstructions details"
    },
    ":TemperatureInstructions": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#TemperatureInstructions",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#TemperatureInstructions",
        "Label": "TemperatureInstructions",
        "Description": "TemperatureInstructions details"
    },
    ":minTemperature": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#minTemperature",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "minTemperature",
        "Description": "minTemperature"
    },
    ":maxTemperature": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#maxTemperature",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "maxTemperature",
        "Description": "maxTemperature"
    },
    ":ULDSpecificPiece": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#ULDSpecificPiece",
        "Type": "EmbeddedObject",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#ULDSpecificPiece",
        "Label": "ULDSpecificPiece",
        "Description": "ULDSpecificPiece details"
    },
    ":pieceGroupId": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#pieceGroupId",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "pieceGroupId",
        "Description": "pieceGroupId"
    },
    ":pieceGroupCount": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#pieceGroupCount",
        "Type": "DataProperty",
        "TypeIRI": "http://www.w3.org/2001/XMLSchema#integer",
        "Label": "pieceGroupCount",
        "Description": "pieceGroupCount"
    },
    ":dryIceWeight": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#dryIceWeight",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "dryIceWeight",
        "Description": "dryIceWeight"
    },
    ":pieceGroupGrossWeight": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#pieceGroupGrossWeight",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#Value",
        "Label": "pieceGroupGrossWeight",
        "Description": "pieceGroupGrossWeight"
    },
    ":uldContourCode": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#uldContourCode",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CodeListElement",
        "Label": "uldContourCode",
        "Description": "uldContourCode"
    },
    ":uldType": {
        "IRI_full": "https://onerecord.iata.org/ns/cargo#uldType",
        "Type": "ObjectProperty",
        "TypeIRI": "https://onerecord.iata.org/ns/cargo#CodeListElement",
        "Label": "uldType",
        "Description": "uldType"
    },
}

export default iri_description;