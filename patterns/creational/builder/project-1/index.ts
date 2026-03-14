import { ComputerBuilder } from "./CompouterBuilder";

const computer = new ComputerBuilder();

const pc = computer
    .addCPU('i5-6th Gen')
    .addCase('Goldenfield')
    .addMotherBoard('MSI')
    .addHHD(true)
    .setHHD('2TB HHD')
    .build();

console.log(pc);

