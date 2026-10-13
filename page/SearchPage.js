export class SearchPage {
    constructor(page){

        this.page = page;
        this.location = page.locator('//select[@id="location"]');
        this.hotels = page.locator('//select[@id="hotels"]');
        this.roomtype = page.locator('//select[@id="room_type"]');
        this.noofrooms = page.locator('//select[@id="room_nos"]');
        this.checkin = page.locator('//input[@id="datepick_in"]');
        this.checkout = page.locator('//input[@id="datepick_out"]');
        this.adults = page.locator('//select[@id="adult_room"]');
        this.child = page.locator('//select[@id="child_room"]');
        this.submit = page.locator('//input[@id="Submit"]');
        this.reset = page.locator('//input[@id="Reset"]');

    }

     
    async enterLocation() {

    await this.location.selectOption({ label: 'Melbourne' });
}
    async hotel(){
        await this.hotels.selectOption({label: 'Hotel Sunshine'});
    }
    async typeroom(){
        await this.roomtype.selectOption({label : 'Double'});
    }
    async roomno(){
        await this.noofrooms.selectOption({label : '4 - Four'});
    }
    async incheck(){
        await this.checkin.fill('07/10/26')
    }
    async outcheck(){
        await this.checkout.fill('08/10/26')

    }
    async adult(){
        await this.adults.selectOption({index : 3});
    }
    async children(){
        await this.child.selectOption({index: 3});
    }
   async submitting() {
    await this.submit.click();
}
}