<template>
    <div class="row taskbar">
        <div class="col- col-sm-12 col-md-3 col-lg-3 col-xl-3 taskbar__list">
            <div class="list-group" data-list="0">
                <h2 class="list-group__name list-group__name--onhold">ON-HOLD</h2>
                <div class="list-group__block" >
                    <div data-list="0" data v-for="(item, index) in this.listOne" :key="item.id"  class="list-group-item list-group-item-action list-group__item">
                        <div class="form-group">
                            <textarea v-model="item.text" class="form-control form-group__textarea"></textarea>
                        </div>
                        <button @click="deleteItemListOne(index)" class="form-group__button form-group__button--close">+</button>
                        <div @mousedown="dragAndDropItem($event, index)" @touchstart="dragAndDropItem($event, index)" class="list-group__top"></div>
                        <div @mousedown="dragAndDropItem($event, index)" @touchstart="dragAndDropItem($event, index)" class="list-group__bottom"></div>
                    </div>
                </div>
                <button @click="addItemListOne" class="form-group__button form-group__button--addition"><span>+</span> Добавить задачу</button>
            </div>
        </div>
        <div class="col- col-sm-12 col-md-3 col-lg-3 col-xl-3 taskbar__list">
            <div class="list-group" data-list="1">
                <h2 class="list-group__name list-group__name--inprogress">IN-PROGRESS</h2>
                <div class="list-group__block">
                    <div data-list="1" v-for="(item, index) in listTwo" :key="item.id" class="list-group-item list-group-item-action list-group__item">
                        <div class="form-group">
                            <textarea v-model="item.text" class="form-control form-group__textarea"></textarea>
                        </div>
                        <button @click="deleteItemListTwo(index)" class="form-group__button form-group__button--close" onselectstart="return false">+</button>
                        <div @mousedown="dragAndDropItem($event, index)" @touchstart="dragAndDropItem($event, index)" class="list-group__top"></div>
                        <div @mousedown="dragAndDropItem($event, index)" @touchstart="dragAndDropItem($event, index)" class="list-group__bottom"></div>
                    </div>
                </div>
                <button @click="addItemListTwo" class="form-group__button form-group__button--addition"><span>+</span> Добавить задачу</button>
            </div>
        </div>
            <div class="col- col-sm-12 col-md-3 col-lg-3 col-xl-3 taskbar__list">
                <div class="list-group" data-list="2">
                    <h2 class="list-group__name list-group__name--needsreview">NEEDS-REVIEW</h2>
                    <div class="list-group__block">
                        <div data-list="2" v-for="(item, index) in listThree" :key="item.id" class="list-group-item list-group-item-action list-group__item">
                            <div class="form-group">
                                <textarea v-model="item.text" class="form-control form-group__textarea"></textarea>
                            </div>
                            <button @click="deleteItemListThree(index)" class="form-group__button form-group__button--close" onselectstart="return false">+</button>
                            <div @mousedown="dragAndDropItem($event, index)" @touchstart="dragAndDropItem($event, index)" class="list-group__top"></div>
                            <div @mousedown="dragAndDropItem($event, index)" @touchstart="dragAndDropItem($event, index)" class="list-group__bottom"></div>
                        </div>
                    </div>
                    <button @click="addItemListThree" class="form-group__button form-group__button--addition"><span>+</span> Добавить задачу</button>
                </div>
            </div>
            <div class="col- col-sm-12 col-md-3 col-lg-3 col-xl-3 taskbar__list">
                <div class="list-group" data-list="3">
                    <h2 class="list-group__name list-group__name--approved">APPROVED</h2>
                    <div class="list-group__block">
                        <div data-list="3" v-for="(item, index) in listFour" :key="item.id" class="list-group-item list-group-item-action list-group__item">
                            <div class="form-group">
                                <textarea v-model="item.text" class="form-control form-group__textarea"></textarea>
                            </div>
                            <button @click="deleteItemListFour(index)" class="form-group__button form-group__button--close" onselectstart="return false">+</button>
                            <div @mousedown="dragAndDropItem($event, index)" @touchstart="dragAndDropItem($event, index)" class="list-group__top"></div>
                            <div @mousedown="dragAndDropItem($event, index)" @touchstart="dragAndDropItem($event, index)" class="list-group__bottom"></div>
                        </div>
                    </div>
                    <button @click="addItemListFour" class="form-group__button form-group__button--addition"><span>+</span> Добавить задачу</button>
                </div>
            </div>
        </div>
</template>

<script>
    import Vue from 'vue'
    import { mapState } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

	export default {
        name: 'home',
		data() {
			return {
                id: 0,
                text: ""
			}
        },

        computed: {
            ...mapState([
                "listOne",
                "listTwo",
                "listThree",
                "listFour"
            ]),

        },

        mounted () {
            this.ListOne();
            this.ListTwo();
            this.ListThree();
            this.ListFour();
        },

		methods: {
            ...mapMutations([
                "ListOne",
                "ListTwo",
                "ListThree",
                "ListFour"
            ]),
            ...mapActions([

            ]),

            addItemListOne (e) {
                this.id++;
                this.listOne.push({id:this.id, text:""});
                const parsed = JSON.stringify(this.listOne);
                localStorage.setItem('list0', parsed); 
            },

            addItemListTwo() {
                this.id++;
                this.listTwo.push({id:this.id, text:""});
                const parsed = JSON.stringify(this.listTwo);
                localStorage.setItem('list1', parsed); 
            },

            addItemListThree (e) {
                this.id++;
                this.listThree.push({id:this.id, text:""});
                const parsed = JSON.stringify(this.listThree);
                localStorage.setItem('list2', parsed); 
            },

            addItemListFour (e) {
                this.id++;
                this.listFour.push({id:this.id, text:""});
                const parsed = JSON.stringify(this.listFour);
                localStorage.setItem('list3', parsed);
            },

            deleteItemListOne (index) {
                this.listOne.splice(index, 1);
                const parsed = JSON.stringify(this.listOne);
                localStorage.setItem('list0', parsed);  
            },

            deleteItemListTwo (index) {
                this.listTwo.splice(index, 1);
                const parsed = JSON.stringify(this.listTwo);
                localStorage.setItem('list1', parsed); 
            },

            deleteItemListThree (index) {
                this.listThree.splice(index, 1);
                const parsed = JSON.stringify(this.listThree);
                localStorage.setItem('list2', parsed); 
            },

            deleteItemListFour (index) {
                this.listFour.splice(index, 1);
                const parsed = JSON.stringify(this.listFour);
                localStorage.setItem('list3', parsed);
            },

            saveList (lists) {
                for (let index = 0; index < lists.length; index++) {
                    const parsed = JSON.stringify(lists[index]);
                    localStorage.setItem('list' + index, parsed);    
                }
            },

            dragAndDropItem (e, index) {
                let block, widthBlock, item, element, top, bottom;

                block      = e.target.parentNode;
                widthBlock = block.offsetWidth;

                if (e.which == 3 || !block.classList.contains('list-group__item')) {
                    return;
                }

                let findDroppable = () => {
                    block.hidden = true;
                    element      = document.elementFromPoint(event.clientX || e.targetTouches[0].pageX, event.clientY || e.targetTouches[0].pageY);
                    block.hidden = false;

                    if (element === null) {
                        return;
                    }
                }

                let moveAt = (e) => {
                    block.style.left = (e.clientX || e.targetTouches[0].pageX) - block.offsetWidth / 2 + 'px';
                    block.style.top  = (e.clientY || e.targetTouches[0].pageY) - block.offsetHeight / 8 + 'px';
                }

                let move = (e) => {
                    if (e.type === "mousemove") {
                        e.preventDefault();
                    }

                    document.body.appendChild(block);
                    block.style.width    = widthBlock + "px";
                    block.style.padding  = "20px";
                    block.style.position = "absolute";
                    block.style.zIndex   = 1000;
                    block.style.transform= "rotate(5deg)";

                    findDroppable();
                    moveAt(e);
                }



                let stop = () => {
                    document.removeEventListener("mousemove", move);
                    document.removeEventListener("touchmove", move);
                    document.removeEventListener("mouseup", stop);
                    document.removeEventListener("touchcend", stop);

                    let lists, numberList, numberListDraggedItem, top, bottom, isTop, isBottom, textarea;

                    top      = block.querySelector(".list-group__top");
                    bottom   = block.querySelector(".list-group__bottom");
                    textarea = block.querySelector(".form-group__textarea");

                    if (element === undefined) {
                        top.style.display = "none";
                        bottom.style.display = "none";
                        block.querySelector(".form-group__textarea").focus();
                        return;
                    }

                    lists                 = [this.listOne, this.listTwo, this.listThree, this.listFour];
                    numberList            = element.parentNode.getAttribute("data-list");
                    numberListDraggedItem = block.getAttribute("data-list");

                    if (element.parentNode.classList.contains('list-group')) {

                        if (element.classList.contains('form-group__button')) {
                            lists[numberList].push(lists[numberListDraggedItem][index]);
                            lists[numberListDraggedItem].splice(index, 1);
                        }

                        if (element.classList.contains('list-group__name')) {
                            lists[numberList].unshift(lists[numberListDraggedItem][index]);
                            lists[numberListDraggedItem].splice(index, 1)
                        }
                    }

                    isTop    = element.classList.contains('list-group__top');
                    isBottom = element.classList.contains('list-group__bottom');

                    if (isTop || isBottom) {
                        let nodes, parent, children, childrenIndex;

                        parent        = element.parentNode.parentNode;
                        children      = parent.children;
                        nodes         = Array.prototype.slice.call(children),
                        childrenIndex = nodes.indexOf(element.parentNode);

                        if (isBottom) {
                            childrenIndex += 1;
                        }

                        lists[numberList].splice(childrenIndex, 0, lists[numberListDraggedItem][index]);
                        lists[numberListDraggedItem].splice(index, 1);

                    }

                    this.saveList(lists);
                }

                let deleteFocus = (e) => {
                    block.querySelector(".list-group__top").style.display = "block";
                    block.querySelector(".list-group__bottom").style.display = "block";
                    block.querySelector(".form-group__textarea").blur();

                }

                document.addEventListener("mousemove", move);
                document.addEventListener("touchmove", move);
                block.querySelector(".form-group__textarea").addEventListener("mouseleave", deleteFocus);

                document.addEventListener("mouseup", stop);
                document.addEventListener("touchcend", stop);
                block.querySelector(".form-group__textarea").addEventListener("touchleave", deleteFocus);
            }
		}
    }
</script>

<style scope>

    .taskbar {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .list-group {
        margin-bottom: 40px;
        height: 90vh;
    }

    .list-group__top {
        background: transparent;
        width: 100%;
        height: 50%;
        position: absolute;
        top: 0;
        left: -18px;
    }

    .list-group__bottom {
        background: transparent;
        width: 100%;
        height: 50%;
        position: absolute;
        bottom: 0;
        left: -18px;
    }

    .list-group__top--noactive, .list-group__bottom--noactive {
        display: none;
    }

    .list-group__block {
        overflow-x: hidden;
        overflow-y: auto;
    }
    .list-group__block::-webkit-scrollbar {
        height: 8px;
        width: 8px;
    }
    .list-group__block::-webkit-scrollbar-track-piece {
        background: #2b2d33;
    }
    .list-group__block::-webkit-scrollbar-thumb {
       background: white;
    }

    .list-group__scroll {
        overflow-y: scroll;
        overflow-x: hidden;
        height: 200px;
    }
    .list-group__name {
        font-size: 1.4rem;
        padding: 5px;
        padding-left: 15px;
        color: white;
        margin: 0;
    }
    .list-group__name--onhold {
        background: #fb7e46;
    }
    .list-group__name--inprogress {
        background: #2a92bf;
    }
    .list-group__name--needsreview {
        background: #f4ce46;
    }
    .list-group__name--approved {
        background: #00b961;
    }
    body .list-group__item, body .list-group__item:hover {
        background: #2b2d33;
    }
    .list-group__item .form-group {
        margin-bottom: 0px;
    }
    .list-group__item .form-group:last-child {
        margin-bottom: 1rem;
    }
    .list-group__item .form-group__textarea,
    .list-group__item .form-group__textarea:active {
        height: 100px;
        background: #1c1d20;
        color: white;
        box-shadow: none;
        border-color: transparent;
    }
    .list-group__item .form-group__textarea:hover, .list-group__item .form-group__textarea:focus {
        border-color: white;
        background: #1c1d20;
        color: white;
        box-shadow: none;

    }
    body .form-group__button {
        position: absolute;
        background: none;
        border: none;
        outline: none;
    }

    .list-group__item .form-group__button--close {
        right: -9px;
        top: -16px;
        color: white;
        font-weight: bold;
        transform: rotate(45deg);
        font-size: 30px;
    }

    .list-group__item .form-group__button--close:hover {
        color: red;
    }

    body .form-group__button--addition {
        position: static;
        margin-top: -1px;
        color: white;
        font-weight: bold;
        font-size: 16px;
        z-index: 10;
        background: #2b2d33;

    }

    body .form-group__button--addition span {
        font-size: 30px;
        vertical-align: sub;
    }

    .form-group__button--addition:hover {
        color: #61bd4f;
    }

    @media (max-width: 768px) {
        .taskbar__list {
            display: flex;
            flex-direction: column;
        }
        .list-group {
            height: 300px;
            margin-bottom: 50px!important;
            justify-content: center;
        }
    }
</style>
