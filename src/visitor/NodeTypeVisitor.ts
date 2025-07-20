import { SyntaxNode } from "tree-sitter";
import ElementBuilder from "../builder/ElementsBuilder";
import { Visitor } from "./Visitor";

export default class NodeTypeVisitor implements Visitor {

    private builder: ElementBuilder;

    constructor(builder: ElementBuilder) {
        this.builder = builder;
    }

    visit(node: SyntaxNode): void {
        switch (node.type) {
            case "component_group":
                this.builder.createGroup();
                break;
            case "component_unit":
                this.builder.addUnitElement(node);
                break;
        }
    }
}