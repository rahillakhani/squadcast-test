import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import Component from "../FilterContainer";


describe("FilterContainer", () => {
    test("container to be present with add button", async () => {
        render(<Component/>);
        // jest.spyOn(Component, 'addfilterRow');

        expect(screen.getAllByRole('button')[0]).toHaveTextContent("Add Filter");
        expect(screen.getAllByRole('button')[1]).toHaveTextContent("Add Filter Group");
        fireEvent.click(screen.getAllByRole('button')[0]);
        // expect(Component.prototype.addfilterRow).toHaveBeenCalled();
        fireEvent.click(screen.getAllByRole('button')[1]);
        new Promise((res, reject) => {
            let findme = screen.findByRole('span');
            return findme.length > 0 ? res(findme) : reject(findme)
        })
            .then(() => {
                console.log("found it");
            })
            .catch(() => {
                console.log("not found")
            });
    })
});
