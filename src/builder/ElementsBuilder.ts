import { SyntaxNode } from "tree-sitter";
import { GroupElement, UnitElement } from "../types/elements.type";
import CaseSentitiveHelper from "../helper/CaseSentitiveHelper";

export default class ElementBuilder {

    private currentGroup: GroupElement | null;
    private currentElements: UnitElement[];

    constructor() {
        this.currentGroup = null;
        this.currentElements = [];
    }

    createGroup() {

        this.currentGroup = {
            elements: this.currentElements
        }

        this.currentElements = [];

    }

    build() {
        return this.currentGroup?.elements
            .map(element => this.generateBody(element))
            .join('\n');
    }

    addUnitElement(node: SyntaxNode) {
        const name = node.childForFieldName("name")!.text;
        const repeat = node.childForFieldName("repeat")?.text ?? null;

        const element: UnitElement = {
            name,
            repeat: repeat ?? undefined,
        };

        if (this.currentGroup) {
            element.children = this.currentGroup.elements;
            this.currentGroup = null;
        }

        if (repeat) {
            Array.from({ length: parseInt(repeat) }).forEach(() => {
                this.currentElements.push({ ...element });
            });
        } else {
            this.currentElements.push(element);
        }
    }

    private generateBody(element: UnitElement, level: number = 0): string {
        const indent = '\t'.repeat(level);
        const childIndent = '\t'.repeat(level + 1);

        const children = (element.children || [])
            .map((child: any) => this.generateBody(child, level + 1))
            .join('\n');

        return [
            `${indent}${CaseSentitiveHelper.toPascalCase(element.name)} {`,
            children ? `${children}` : `${childIndent}`,
            `${indent}}`
        ].join('\n');
    }


}