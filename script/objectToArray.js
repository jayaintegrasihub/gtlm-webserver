export function transformData(data) {
    const transformedData = {
        moduleAddr: data.moduleAddr,
        moduleType: data.moduleType,
        pollTime: data.pollTime,
    };

    transformedData.slave1 = {
        slaveId1: data.slaveId1,
        modeMod1: data.modeMod1,
        baudRate1: data.baudRate1,
        databits1: data.databits1,
        parity1: data.parity1,
        stopbits1: data.stopbits1,
        ipSrc1: data.ipSrc1,
        ipDest1: data.ipDest1,
        net1: data.net1,
        gw1: data.gw1,
        port1: data.port1,
        config: [],
    };
    transformedData.slave2 = {
        slaveId2: data.slaveId2,
        modeMod2: data.modeMod2,
        baudRate2: data.baudRate2,
        databits2: data.databits2,
        parity2: data.parity2,
        stopbits2: data.stopbits2,
        ipSrc2: data.ipSrc2,
        ipDest2: data.ipDest2,
        net2: data.net2,
        gw2: data.gw2,
        port2: data.port2,
        config: [],
    };

    // Loop through addr1 to addr20
    for (let i = 1; i <= 20; i++) {
        const key = `addr${i}`;
        const en = `en${i}`;
        const fn = `fn${i}`;
        const len = `len${i}`;
        const tag = `tag${i}`;
        const type = `type${i}`;

        const configObject = {
            addr: data[key],
            en: data[en],
            fn: data[fn],
            len: data[len],
            tag: data[tag],
            type: data[type],
        };

        if (i <= 10) {
            transformedData.slave1.config.push(configObject);
        } else {
            transformedData.slave2.config.push(configObject);
        }
    }

    return transformedData;
}