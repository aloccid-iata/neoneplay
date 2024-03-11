const embobject_properties = {
    "ActivitySequence": {
        "properties": ['activity','sequenceNumber']
    },
//Experimental: Embedded ProposedActivity
    "ProposedActivity": {
        "properties": ['sequenceNumber','proposedStartTime','proposedEndTime','proposedLocation','activityType','involvedPhysicalLogisticsObjects','partialActivityType','partialActivityFor']
    },
//Experimental: Embedded ProposedTransportMovement
    "ProposedTransportMovement": {
        "properties": ['sequenceNumber','proposedStartTime','proposedEndTime','proposedLocation','activityType','involvedPhysicalLogisticsObjects','partialActivityType','partialActivityFor','departureLocation','arrivalLocation','modeQualifier']
    },
    "Address": {
        "properties": ['addressCode','addressCodeType','cityCode','cityName','country','postalCode','postOfficeBox','regionCode','regionName','streetAddressLines']
    },
    "Adjustments": {
        "properties": ['correctionNumber','correctionSerialNumber','reasonForAdjustments']
    },
    "Characteristic": {
        "properties": ['textualValue','characteristicType']
    },
    "ContactDetail": {
        "properties": ['textualValue','contactDetailType']
    },
    "Country": {
        "properties": ['countryCode','countryName']
    },
    "Dimensions": {
        "properties": ['height','volume','width','length']
    },
    "Geolocation": {
        "properties": ['elevation','geolocationUnit','latitude','longitude']
    },
    "HandlingInstructions": {
        "properties": ['description','handlingInstructionsType','handlingInstructionsTypeCode','requestedByActor']
    },
    "Measurement": {
        "properties": ['measurementTimestamp','measurementValue','recordedGeolocation']
    },
    "MovementTime": {
        "properties": ['direction','movementMilestone','movementTimestamp','movementTimeType']
    },
    "OtherIdentifier": {
        "properties": ['textualValue','otherIdentifierType']
    },
    "Party": {
        "properties": ['organization','otherIdentifiers','role']
    },
    "Ranges": {
        "properties": ['amount','maximumQuantity','minimumQuantity','rateClassCode','ratingType']
    },
    "RegulatedEntity": {
        "properties": ['category','owningOrganization','regulatedEntityExpiryDate']
    },
    "ScheduledLegs": {
        "properties": ["arrivalDate","arrivalLocation","departureDate","departureLocation","legSequenceNumber","transportIdentifier"]
    },
    "Value": {
        "properties": ['unit','numericalValue']
    },
    "VolumetricWeight": {
        "properties": ['chargeableWeight','conversionFactor']
    }
}

export default embobject_properties;
