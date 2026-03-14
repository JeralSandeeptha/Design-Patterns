import Computer from "./Computer";

export class ComputerBuilder {

    private computer = new Computer();

    addCase(computerCase: string): ComputerBuilder {
        this.computer.case = computerCase;
        return this;
    }

    addCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    addMotherBoard(mb: string): ComputerBuilder {
        this.computer.motherBoard = mb;
        return this;
    }

    addHHD(isHHD: boolean): ComputerBuilder {
        this.computer.isHHD = isHHD;
        return this;
    }

    setHHD(hhd: string): ComputerBuilder {
        this.computer.hhd = hhd;
        return this;
    }

    addSSD(isSSD: boolean): ComputerBuilder {
        this.computer.isSSD = isSSD;
        return this;
    }

    setSSD(ssd: string): ComputerBuilder {
        this.computer.ssd = ssd;
        return this;
    }

    addRAM(ram: number): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    build(): Computer {
        return this.computer;
    }
}