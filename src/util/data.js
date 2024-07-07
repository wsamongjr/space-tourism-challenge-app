import data from "mockdata/data.json";

export const fetch = () => {
    return Promise.resolve(data);
};

export const fetchDestinations = async () => {
    var result = await fetch();
    return result.destinations;
};

export const getDestinationByName = async (destinationName) => {
    var destinations = await fetchDestinations();
    return destinations.find(({ name }) => name === destinationName);
};
