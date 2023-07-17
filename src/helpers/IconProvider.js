const IconProvider = ({ objectType }) => {
    const IconList = {
        "https://onerecord.iata.org/ns/cargo#Waybill": <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M222-80q-43.75 0-74.375-30.625T117-185v-125h127v-570l59.8 60 59.8-60 59.8 60 59.8-60 59.8 60 60-60 60 60 60-60 60 60 60-60v695q0 43.75-30.625 74.375T738-80H222Zm516-60q20 0 32.5-12.5T783-185v-595H304v470h389v125q0 20 12.5 32.5T738-140ZM357-622v-60h240v60H357Zm0 134v-60h240v60H357Zm333-134q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9Zm0 129q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9ZM221-140h412v-110H177v65q0 20 12.65 32.5T221-140Zm-44 0v-110 110Z" /></svg>,
        "https://onerecord.iata.org/ns/cargo#Shipment": (<div className="relative" style={{ width: "24px" }}>
            <svg style={{ top: "0px", left: "6px" }} className="absolute" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M171.271-183.465v-390.227q-21.039-2.808-34.116-21.173-13.077-18.365-13.077-39.697v-117.907q0-25.089 17.566-42.655 17.566-17.566 42.619-17.566h591.474q25.053 0 42.619 17.566t17.566 42.655v117.907q0 21.332-13.077 39.697-13.077 18.365-34.116 21.173v390.153q0 25.437-17.565 42.853-17.566 17.415-42.612 17.415H231.448q-25.046 0-42.612-17.565-17.565-17.566-17.565-42.629Zm47.96-390.92v390.846q0 5.385 3.462 8.846 3.461 3.462 8.846 3.462h496.922q5.385 0 8.846-3.462 3.462-3.461 3.462-8.846v-390.846H219.231Zm556.422-47.96q5.385 0 8.847-3.462 3.462-3.461 3.462-8.846v-117.768q0-5.385-3.462-8.847-3.462-3.461-8.847-3.461H184.347q-5.385 0-8.847 3.461-3.462 3.462-3.462 8.847v117.768q0 5.385 3.462 8.846 3.462 3.462 8.847 3.462h591.306ZM394.116-422.732h171.768v-47.96H394.116v47.96ZM219.231-171.231v-403.154 403.154Z" /></svg>
            <svg style={{ top: "12px", left: "0px" }} className="absolute" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M171.271-183.465v-390.227q-21.039-2.808-34.116-21.173-13.077-18.365-13.077-39.697v-117.907q0-25.089 17.566-42.655 17.566-17.566 42.619-17.566h591.474q25.053 0 42.619 17.566t17.566 42.655v117.907q0 21.332-13.077 39.697-13.077 18.365-34.116 21.173v390.153q0 25.437-17.565 42.853-17.566 17.415-42.612 17.415H231.448q-25.046 0-42.612-17.565-17.565-17.566-17.565-42.629Zm47.96-390.92v390.846q0 5.385 3.462 8.846 3.461 3.462 8.846 3.462h496.922q5.385 0 8.846-3.462 3.462-3.461 3.462-8.846v-390.846H219.231Zm556.422-47.96q5.385 0 8.847-3.462 3.462-3.461 3.462-8.846v-117.768q0-5.385-3.462-8.847-3.462-3.461-8.847-3.461H184.347q-5.385 0-8.847 3.461-3.462 3.462-3.462 8.847v117.768q0 5.385 3.462 8.846 3.462 3.462 8.847 3.462h591.306ZM394.116-422.732h171.768v-47.96H394.116v47.96ZM219.231-171.231v-403.154 403.154Z" /></svg>
            <svg style={{ top: "12px", left: "12px" }} className="absolute" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M171.271-183.465v-390.227q-21.039-2.808-34.116-21.173-13.077-18.365-13.077-39.697v-117.907q0-25.089 17.566-42.655 17.566-17.566 42.619-17.566h591.474q25.053 0 42.619 17.566t17.566 42.655v117.907q0 21.332-13.077 39.697-13.077 18.365-34.116 21.173v390.153q0 25.437-17.565 42.853-17.566 17.415-42.612 17.415H231.448q-25.046 0-42.612-17.565-17.565-17.566-17.565-42.629Zm47.96-390.92v390.846q0 5.385 3.462 8.846 3.461 3.462 8.846 3.462h496.922q5.385 0 8.846-3.462 3.462-3.461 3.462-8.846v-390.846H219.231Zm556.422-47.96q5.385 0 8.847-3.462 3.462-3.461 3.462-8.846v-117.768q0-5.385-3.462-8.847-3.462-3.461-8.847-3.461H184.347q-5.385 0-8.847 3.461-3.462 3.462-3.462 8.847v117.768q0 5.385 3.462 8.846 3.462 3.462 8.847 3.462h591.306ZM394.116-422.732h171.768v-47.96H394.116v47.96ZM219.231-171.231v-403.154 403.154Z" /></svg>
        </div>),
        "https://onerecord.iata.org/ns/cargo#TransportMeans": (<div className="relative" style={{ width: "18px" }}>

            <svg className="absolute" style={{ top: "0px" }} xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M235.774-216.155q-45.678 0-77.688-32.17-32.009-32.169-32.009-77.714h-56.46v-378.48q0-25.079 17.463-42.645 17.463-17.565 42.805-17.565H659.23v133.076h102.115l129.231 181.078v124.536h-61.884q0 45.545-32.196 77.714-32.196 32.17-77.875 32.17-45.678 0-77.688-32.17-32.009-32.169-32.009-77.714H345.845q0 45.923-32.196 77.903-32.196 31.981-77.875 31.981Zm.091-47.96q25.804 0 43.912-18.012t18.108-43.912q0-25.9-18.094-43.912-18.093-18.012-43.83-18.012-25.9 0-43.912 18.012t-18.012 43.912q0 25.9 18.012 43.912t43.816 18.012ZM117.576-373.999h20.116q11.961-27.847 39.076-44.482 27.116-16.635 59.193-16.635 31.308 0 58.712 16.347 27.404 16.346 39.087 44.77h277.51v-342.77H129.885q-4.808 0-8.558 3.846-3.751 3.847-3.751 8.462v330.462Zm601.136 109.884q25.804 0 43.912-18.012t18.108-43.912q0-25.9-18.094-43.912-18.093-18.012-43.83-18.012-25.901 0-43.912 18.012-18.012 18.012-18.012 43.912t18.012 43.912q18.011 18.012 43.816 18.012ZM659.23-444.384l176.424-1-100.155-138.309H659.23v139.309Zm-292.807-98Z" /></svg>
            <svg className="absolute" style={{ top: "6px", left: "10px" }} xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M349.731-116.347v-30.884l82.385-61.423v-236.655l-319.962 92.193v-49.499l319.962-182.577v-214.462q0-19.961 13.961-33.923 13.962-13.961 33.923-13.961 19.961 0 34.019 13.961 14.057 13.962 14.057 33.923v214.462l319.962 182.577v49.499l-319.962-92.193v235.078l83.193 63v30.884L480.5-161.231l-130.769 44.884Z" /></svg>
        </div>),
        "https://onerecord.iata.org/ns/cargo#Piece":
            (<svg className=" ml-1" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M140.001-163.642v-456.101q-14.358-3.462-27.179-20.487-12.821-17.026-12.821-38.436v-98.768q0-25.435 18.388-43.999 18.388-18.564 44.176-18.564h634.87q25.436 0 44 18.564t18.564 43.999v98.768q0 21.41-12.821 38.436-12.821 17.025-27.179 20.487v456.101q0 25.436-18.564 44.538-18.564 19.103-44 19.103h-554.87q-25.788 0-44.176-19.103-18.388-19.102-18.388-44.538Zm50.255-452.461v453.538q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h554.87q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-453.538H190.256Zm607.179-50.255q5.385 0 8.847-3.461 3.462-3.462 3.462-8.847v-98.768q0-5.385-3.462-8.846-3.462-3.462-8.847-3.462h-634.87q-5.385 0-8.847 3.462-3.462 3.461-3.462 8.846v98.768q0 5.385 3.462 8.847 3.462 3.461 8.847 3.461h634.87ZM367.693-423.539h224.614v-50.255H367.693v50.255ZM190.256-150.256V-616.103v465.847Z" /></svg>),
        "https://onerecord.iata.org/ns/cargo#Uld": <div className="">

            <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M117.695-128.465v-81.023h724.61v81.023h-75.896v-40.511H517.948v40.511h-75.896v-40.511H193.591v40.511h-75.896Zm133.973-199.997q-13.295 0-22.288-8.994-8.994-8.993-8.994-22.288v-457.433q0-13.295 8.994-22.289 8.993-8.993 22.288-8.993h456.664q13.295 0 22.288 8.993 8.994 8.994 8.994 22.289v459.228q0 12.532-8.122 21.009-8.122 8.478-20.596 8.478H251.668Zm9.229-40.511h438.206v-438.975H260.897v438.975ZM360-646.667h240v-40.511H360v40.511Zm-99.103 277.694v-438.975 438.975Z" /></svg>
        </div>,
        "https://onerecord.iata.org/ns/cargo#TransportMovement":
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M357.564-130.001q-61.615 0-104.589-43.245t-42.974-104.446V-622.18q-35-13-57.5-40.512-22.5-27.513-22.5-61.944 0-44.142 30.788-74.753 30.787-30.61 74.499-30.61 43.712 0 74.34 30.703t30.628 74.564q0 34.212-22.5 61.882-22.5 27.67-57.5 40.67v344.488q0 40.192 28.485 68.814 28.485 28.622 69.231 28.622 40.746 0 68.823-28.622 28.078-28.622 28.078-68.814v-404.872q0-61.487 42.974-104.461t104.589-42.974q61.615 0 104.589 42.974t42.974 104.461v344.744q35 13 57.5 40.544 22.5 27.545 22.5 62.017 0 43.58-30.649 74.419t-74.433 30.839q-43.506 0-74.339-30.839-30.834-30.839-30.834-74.419 0-34.485 22.5-62.523 22.5-28.038 57.5-40.038v-344.744q0-40.254-28.485-68.717t-68.898-28.463q-40.413 0-68.823 28.463-28.411 28.463-28.411 68.717v404.872q0 61.201-42.974 104.446t-104.589 43.245ZM235.462-669.999q22.667 0 38.603-16.27 15.936-16.269 15.936-38.936t-15.853-38.603q-15.853-15.936-39.02-15.936-22.333 0-38.603 15.852-16.269 15.853-16.269 39.02 0 22.334 16.269 38.603 16.27 16.27 38.937 16.27Zm489.743 489.743q22.667 0 38.603-16.269 15.936-16.27 15.936-38.937 0-22.667-15.852-38.603-15.853-15.936-39.02-15.936-22.334 0-38.603 15.853-16.27 15.853-16.27 39.02 0 22.333 16.27 38.603 16.269 16.269 38.936 16.269ZM235.128-724.872Zm489.744 489.744Z" /></svg>,
        "https://onerecord.iata.org/ns/cargo#Loading":
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M174.36-134.873q-43.739 0-74.433-30.662-30.694-30.662-30.694-74.356 0-24.262 10.397-45.813 10.398-21.552 29.603-36.988v-187.307h85.77v-230h275.971L651.23-318.077q5.897 13.641 9.897 28.11t4 29.967q0 51.904-36.611 88.516-36.612 36.611-88.454 36.611-38.674 0-70.573-21.897-31.899-21.897-46.181-58.103H276.283q-8.436 34.949-36.943 57.475-28.508 22.525-64.98 22.525Zm545.383-40v-615.126h50.255v564.872h120.769v50.254H719.743Zm-545.5-10.254q23.118 0 39.054-15.82 15.936-15.819 15.936-38.936 0-23.117-15.819-39.053-15.819-15.937-38.937-15.937-23.117 0-39.053 15.82-15.936 15.819-15.936 38.936 0 23.117 15.819 39.053 15.819 15.937 38.936 15.937Zm365.679 0q31.078 0 53.014-21.858 21.937-21.858 21.937-52.937 0-31.078-21.858-53.014-21.858-21.937-52.937-21.937-31.078 0-53.014 21.858-21.937 21.858-21.937 52.937 0 31.078 21.858 53.014 21.858 21.937 52.937 21.937Zm-263.639-80h138.599q.657-19.334 7.388-37.245 6.731-17.911 18.988-32.501h-98.179L223.104-459.744h-63.616v116.155q3.385-.769 7.372-1.154 3.987-.384 7.5-.384 36.472 0 64.98 22.525 28.507 22.526 36.943 57.475Zm88.949-120.411h185.229q5.001 0 9.809 1.154 4.808 1.154 9.424 3.462L438.548-689.744H245.257v179.745l119.975 124.461Zm-22.153 50.665-18.705-19.615q-18.706-19.615-41.283-42.987-22.577-23.372-41.282-42.821l-18.705-19.448h-63.616 63.616l119.975 124.871h98.179-98.179Z" /></svg>,
        "https://onerecord.iata.org/ns/cargo#Organization":
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M130.001-136.924v-537.691h162.564v-162.308h375.127v324.872h162.307v375.127H536.36v-162.564H423.64v162.564H130.001Zm50.255-50.255h112.309v-112.309H180.256v112.309Zm0-162.564h112.309v-112.053H180.256v112.053Zm0-162.308h112.309V-624.36H180.256v112.309ZM342.82-349.743h112.053v-112.053H342.82v112.053Zm0-162.308h112.053V-624.36H342.82v112.309Zm0-162.564h112.053v-112.053H342.82v112.053Zm162.307 324.872h112.31v-112.053h-112.31v112.053Zm0-162.308h112.31V-624.36h-112.31v112.309Zm0-162.564h112.31v-112.053h-112.31v112.053Zm162.565 487.436h112.052v-112.309H667.692v112.309Zm0-162.564h112.052v-112.053H667.692v112.053Z" /></svg>,

    }
    return (
        <>
            {IconList[objectType]}
        </>
    )
}

export default IconProvider;